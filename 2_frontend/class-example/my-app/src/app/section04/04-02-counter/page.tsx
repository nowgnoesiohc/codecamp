"use client"; // react 구버전 방식으로 실행해줘 (지금 수준에서 useState쓰려면 이렇게 해야됨,,)
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const upCount = () => {
    setCounter(counter + 1);
  };
  const downCount = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <div>{counter}</div>
      <button onClick={upCount}>카운트 올리기</button>
      <button onClick={downCount}>카운트 내리기</button>
    </>
  );
};

export default Counter;
