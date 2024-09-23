import React from "react";
import InputForm from "./InputForm";
import Button from "./Button";

const PostForm = () => {
  <>
    <div className="input-area">
      <div className="id-pw-area">
        <InputForm title="author" />
        <InputForm title="password" />
      </div>
      <InputForm title="title" />

      <InputForm title="content" />
      <InputForm title="address" />

      <InputForm title="youtube" />
    </div>
    <div className="button-area">
      <Button reg={true} value="취소" />
      <Button value="등록하기" />
    </div>
  </>;
};

export default PostForm;
