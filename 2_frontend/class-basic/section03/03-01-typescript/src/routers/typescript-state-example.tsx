import { useState } from "react";

interface IProfile {
  name: string;
  age: number | string;
  school: string;
  hobby?: string;
}
const TypescriptStateExample = () => {
  const [age, setAge] = useState(12);
  setAge("12살"); // -> 이렇게 하면 안돼요~

  // 타입 명시
  const [school, setSchool] = useState<string>("");

  // 타입 명시를 해야하는 상황
  const [profile, setProfile] = useState<IProfile>({
    name: "철수",
    age: 8,
    school: "다람쥐초등학교",
  });
  setProfile({
    name
  })
  return <></>;
};
