let diary = [];
let title, content;
let emotion = "";

window.onload = () => {
  renderDiary();
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
  // if (document.getElementById("happy").checked) {
  //   emotion = "happy";
  // } else if (document.getElementById("sad").checked) {
  //   emotion = "sad";
  // } else if (document.getElementById("surprised").checked) {
  //   emotion = "surprised";
  // } else if (document.getElementById("angry").checked) {
  //   emotion = "angry";
  // } else if (document.getElementById("etc").checked) {
  //   emotion = "etc";
  // }
  console.log(emotion);

  // 제목과 내용을 가져옴
  // 공백만 입력한 경우 버튼을 활성화 시키지 않음
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
  const a_diary = new Object();
  a_diary.title = title;
  a_diary.content = content;
  a_diary.emotion = emotion;

  const today = new Date();
  const date = `${today.getFullYear()}. ${String(today.getMonth() + 1).padStart(
    2,
    0
  )}. ${String(today.getDate()).padStart(2, 0)}`;
  a_diary.date = date;

  diary.push(a_diary);
  console.log(diary);

  // 입력창 초기화
  // document.getElementById("happy").checked = false;
  // document.getElementById("sad").checked = false;
  // document.getElementById("suprised").checked = false;
  // document.getElementById("angry").checked = false;
  // document.getElementById("etc").checked = false;
  // document.getElementById("input-box-title").value = "";
  // document.getElementById("input-box-content").value = "";

  renderDiary();
};

// 일기들 렌더링
const renderDiary = () => {
  let divString = `<div class="list-content" onclick="infoAlert(0)">
                    <img class="content-img" src="./assets/sad.png" />
                    <div class="content-text-area">
                      <div class="content-text-row">
                        <div class="text-status" style="color: #28b4e1">
                          슬퍼요
                        </div>
                        <div class="text-date">2024. 03. 12</div>
                      </div>
                      <div class="text-title">
                        타이틀 영역입니다. 한 줄까지만 노출됩니다.
                      </div>
                    </div>
                  </div>`;
  // NOTE : 여기서부터 고치기
  diary.forEach((el) => {
    const emo = el.emotion;
    let text = "";
    let textColor = "";
    if (emo === "happy") {
      textColor = "#EA5757";
      text = "행복해요";
    } else if (emo === "sad") {
      textColor = "#28b4e1";
      text = "슬퍼요";
    } else if (emo === "surprised") {
      textColor = "#D59029";
      text = "놀랐어요";
    } else if (emo === "angry") {
      textColor = "#777777";
      text = "화나요";
    } else if (emo === "etc") {
      textColor = "#A229ED";
      text = "기타";
    }
    // 감정 한글화
    el.emotion = text;

    divString += `<div class="list-content" onclick="infoAlert(${i})">
                    <img class="content-img" src="./assets/${emo}.png" />
                    <div class="content-text-area">
                      <div class="content-text-row">
                        <div class="text-status" style="color: ${textColor}">
                          ${text}
                        </div>
                        <div class="text-date">${diary[i].date}</div>
                      </div>
                      <div class="text-title">
                        ${el.title}
                      </div>
                    </div>
                  </div>`;
  });

  // for (let i = 0; i < diary.length; i++) {
  //   const emo = diary[i].emotion;
  //   let text = "";
  //   let textColor = "";
  //   if (emo === "happy") {
  //     textColor = "#EA5757";
  //     text = "행복해요";
  //   } else if (emo === "sad") {
  //     textColor = "#28b4e1";
  //     text = "슬퍼요";
  //   } else if (emo === "surprised") {
  //     textColor = "#D59029";
  //     text = "놀랐어요";
  //   } else if (emo === "angry") {
  //     textColor = "#777777";
  //     text = "화나요";
  //   } else if (emo === "etc") {
  //     textColor = "#A229ED";
  //     text = "기타";
  //   }
  //   // 감정 한글화
  //   diary[i].emotion = text;

  //   divString += `<div class="list-content" onclick="infoAlert(${i})">
  //                   <img class="content-img" src="./assets/${emo}.png" />
  //                   <div class="content-text-area">
  //                     <div class="content-text-row">
  //                       <div class="text-status" style="color: ${textColor}">
  //                         ${text}
  //                       </div>
  //                       <div class="text-date">${diary[i].date}</div>
  //                     </div>
  //                     <div class="text-title">
  //                       ${diary[i].title}
  //                     </div>
  //                   </div>
  //                 </div>`;
  // }
  console.log(divString);
  document.getElementById("list-content-area").innerHTML = divString;
};

const infoAlert = (index) => {
  alert(`
    ${diary[index].date} 일기
    제목 : ${diary[index].title}
    기분 : ${diary[index].emotion}
    내용 : ${diary[index].content}
    `);
};
