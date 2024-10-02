import type { ITitle } from "../../models/InputFormTitle";

export default function InputFormTitle({ title }: ITitle) {
  // console.log(title);
  const titleObj = {
    author: "작성자",
    password: "비밀번호",
    title: "제목",
    content: "내용",
    address: "주소",
    youtube: "유튜브 링크",
    photo: "사진 첨부",
  };
  const requiredObj = {
    author: true,
    password: true,
    title: true,
    content: true,
  };

  return (
    <div className="input-form-title">
      <div className="input-form-title-text">{titleObj[title]}</div>
      {title !== "youtube" && <div className="required-star">*</div>}
    </div>
  );
}
