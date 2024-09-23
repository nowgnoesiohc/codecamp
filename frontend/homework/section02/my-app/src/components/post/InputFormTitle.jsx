export default function InputFormTitle() {
  return (
    <div className="input-form-title">
      <div className="input-form-title-text">{props.title}</div>
      {props.required && <div className="required-star">*</div>}
    </div>
  );
}
