let diary = JSON.parse(localStorage.getItem("diary")) ?? [];
const queryString = location.search;
const idx = new URLSearchParams(queryString).get("index");
const a_diary = diary[idx];

window.onload = () => {
  document.getElementById("diary-title").innerText = a_diary.title;
  console.log(`
  <img src="./assets/icon_${a_diary.emotion}.png"/>
  <div>${a_diary.text}</div>;`);
  document.getElementById("content-emotion-area").innerHTML = `
  <img src="./assets/icon_${a_diary.emotion}.png"/>
  <div>${a_diary.text}</div>`;
  document.getElementById("content-date").innerText = `${a_diary.date} 작성`;
  document.getElementById("diary-content").innerText = a_diary.content;
};

const openEditpage = () => {
  window.location.href = `./edit.html?index=${a_diary.idx}`;
};
