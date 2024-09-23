export default function InputFormText() {
  return (
    <input
      className="input-text"
      type="text"
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.author}
    />
  );
}
