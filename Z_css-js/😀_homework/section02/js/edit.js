let diary = JSON.parse(localStorage.getItem("diary")) ?? [];
const queryString = location.search;
const idx = new URLSearchParams(queryString).get("index");
const a_diary = diary[idx];

window.onload = () => {
  console.log(a_diary.emotion);
  document.getElementById(`${a_diary.emotion}`).checked = true;
  document.getElementById("title-textbox").value = a_diary.title;
  document.getElementById("content-textbox").value = a_diary.content;
};

const finishEdit = () => {
  updateDiary();
  document.getElementById("edit-button").style = "transform: skew(-10deg)";
  window.location.href = `./index.html`;
};

const updateDiary = () => {
  let emo;
  document.getElementsByName("emotion").forEach((el) => {
    if (el.checked) {
      emo = el.id;
    }
  });
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
  diary[idx].text = text;
  diary[idx].textColor = textColor;
  diary[idx].emotion = emo;
  diary[idx].title = document.getElementById("title-textbox").value;
  diary[idx].content = document.getElementById("content-textbox").value;
  console.log(diary[idx]);
  localStorage.setItem("diary", JSON.stringify(diary));
};
