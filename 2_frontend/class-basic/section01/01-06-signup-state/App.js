const App = () => {
  const [email, setEmail] = React.usestate("");
  const [password, setPassword] = React.usestate("");

  const onChangeEmail = (event) => {
    console.log(event.target);
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target);
  };
  const onClickSignup=(event)=>{
    console.log(email);
    console.log(password);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               k                                                                                                                                                                                                                                                                    sss
  }
  }
  return (
    <div className="철수의App">
      이메일: <input type="text" onChange={onChangeEmail} />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <button onClick={onClickSignup}>회원가입</button>
    </div>
  );
};
