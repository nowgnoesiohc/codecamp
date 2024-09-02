let diary = JSON.parse(localStorage.getItem("diary")) ?? [];
// let diary = [];
let title, content;
let emotion = "";
let idx = diary.length - 1;

window.onload = () => {
  renderDiary(diary);
};

const inputStatus = () => {
  // 감정 상태를 저장할 변수 초기화
  emotion = "";

  // 각 감정의 라디오 버튼이 체크되었는지 확인
  document.getElementsByName("emotion").forEach((el) => {
    if (el.checked) {
      emotion = el.id;
    }
  });

  // 제목과 내용을 가져옴, 공백만 입력한 경우 버튼을 활성화 시키지 않음
  title = document.getElementById("input-box-title").value.trim();
  content = document.getElementById("input-box-content").value.trim();

  // 모든 조건이 만족할 경우 버튼을 활성화
  if (emotion !== "" && title !== "" && content !== "") {
    document.getElementById("right-create-button").disabled = false;
  } else {
    document.getElementById("right-create-button").disabled = true;
  }
};

// 배열에 객체로 일기 push
const addDiary = () => {
  idx++;

  const a_diary = new Object();
  a_diary.title = title;
  a_diary.content = content;
  a_diary.emotion = emotion;
  a_diary.idx = idx;

  const today = new Date();
  const date = `${today.getFullYear()}. ${String(today.getMonth() + 1).padStart(
    2,
    0
  )}. ${String(today.getDate()).padStart(2, 0)}`;
  a_diary.date = date;

  let text = "";
  let textColor = "";
  if (emotion === "happy") {
    textColor = "#EA5757";
    text = "행복해요";
  } else if (emotion === "sad") {
    textColor = "#28b4e1";
    text = "슬퍼요";
  } else if (emotion === "surprised") {
    textColor = "#D59029";
    text = "놀랐어요";
  } else if (emotion === "angry") {
    textColor = "#777777";
    text = "화나요";
  } else if (emotion === "etc") {
    textColor = "#A229ED";
    text = "기타";
  }

  console.log(a_diary);
  a_diary.text = text;
  a_diary.textColor = textColor;

  diary.push(a_diary);
  localStorage.setItem("diary", JSON.stringify(diary));

  // 입력창 초기화
  // document.getElementById("happy").checked = false;
  // document.getElementById("sad").checked = false;
  // document.getElementById("suprised").checked = false;
  // document.getElementById("angry").checked = false;
  // document.getElementById("etc").checked = false;
  // document.getElementById("input-box-title").value = "";
  // document.getElementById("input-box-content").value = "";

  renderDiary(diary);
};

// 일기들 렌더링
const renderDiary = (diary) => {
  console.log(diary);

  const divString = diary
    .map(
      (el) =>
        ` <a href="./detail.html?index=${el.idx}">
            <div class="list-content" onclick="infoAlert(${el.idx})">
              <img class="content-img" src="./assets/${el.emotion}.png" />
              <div class="content-text-area">
                <div class="content-text-row">
                  <div class="text-status" style="color: ${el.textColor}">
                    ${el.text}
                  </div>
                  <div class="text-date">${el.date}</div>
                </div>
                <div class="text-title">
                  ${el.title}
                </div>
              </div>
            </div>
          </a>`
    )
    .join("");
  console.log("divString" + divString);
  document.getElementById("list-content-area").innerHTML = divString;
};

const infoAlert = (index) => {
  alert(`
    ${diary[index].date} 일기
    제목 : ${diary[index].title}
    기분 : ${diary[index].text}
    내용 : ${diary[index].content}
    `);
};

const filterEmotion = (event) => {
  const selected = event.target.value;
  let filtered_list;
  switch (selected) {
    case "happy": {
      filtered_list = diary.filter((el) => el.emotion === "happy");
      break;
    }
    case "sad": {
      filtered_list = diary.filter((el) => el.emotion === "sad");
      break;
    }
    case "surprised": {
      filtered_list = diary.filter((el) => el.emotion === "surprised");
      break;
    }
    case "angry": {
      filtered_list = diary.filter((el) => el.emotion === "angry");
      break;
    }
    case "etc": {
      filtered_list = diary.filter((el) => el.emotion === "etc");
      break;
    }
    default: {
      filtered_list = diary;
    }
  }
  // console.log(filtered_list);
  renderDiary(filtered_list);
  console.log(filtered_list);
};
