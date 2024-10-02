import React, { useEffect, useState } from "react";

import IInputValue from "../../_models/new-inputValue";

import NewFormTitle from "./NewFormTitle";
import NewFormText from "./NewFormText";
import NewFormAddress from "./NewFormAddress";
import NewFormPhoto from "./NewFormPhoto";

export default function NewForm() {
  const [inputValue, setInputValue] = useState<IInputValue>({
    author: "",
    password: "",
    title: "",
    content: "",
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const onChangeInputValue = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };
  useEffect(() => {
    inputValue.author &&
    inputValue.password &&
    inputValue.title &&
    inputValue.content
      ? setIsButtonDisabled(false)
      : setIsButtonDisabled(true);
  }, [inputValue]);
}
