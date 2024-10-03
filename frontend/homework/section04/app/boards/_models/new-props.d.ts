interface IButtonProps {
  value: "cancel" | "register";
  disabled?: boolean;
}

interface IInputFormTextProps {
  title:
    | "author"
    | "password"
    | "title"
    | "content"
    | "addressNum"
    | "addressInput"
    | "addressDetail"
    | "youtube"
    | "photo";
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
