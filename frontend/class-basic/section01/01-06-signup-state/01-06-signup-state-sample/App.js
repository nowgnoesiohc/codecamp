// 함수형으로 컴포넌트를 만들 때는 대문자로 시작해야한다.
const App = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [emailError, setEmailError] = React.useState("");

  // 이벤트 핸들러 함수이며, handleChangeEmail 형태로 만드는 회사도 많다.
  function onChangeEmail(event) {
    // event.target
    // console.log(event.target) // 동작한 태그
    // console.log(event.target.value) // 동작한 태그에 입력된 값
    setEmail(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onClickSignup() {
    // state에 값이 잘 저장되었는지 확인하기
    console.log(email);
    console.log(password);

    if (email.includes("@") === false) {
      // alert("이메일이 올바르지 않습니다.")
      // document.getElementById("emailError").innerText = "이메일이 올바르지 않습니다."

      // state 를 통해 에러 보여주기
      setEmailError("이메일이 올바르지 않습니다.(@가 없습니다.)");
    } else {
      alert("회원가입이 완료되었습니다.");
    }
  }

  // onInput이 아닌 onChange를 사용한다.
  return (
    <div className="App">
      이메일: <input type="text" onChange={onChangeEmail} />
      <br />
      {/* <div id="emailError"></div> */}
      <div>{emailError}</div>
      비밀번호: <input type="password" onChange={onChangePassword} />
      <br />
      <button onClick={onClickSignup}>회원가입</button>
    </div>
  );
};
