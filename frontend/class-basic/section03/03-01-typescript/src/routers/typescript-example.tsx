const TypescriptExample = () => {
  // 타입 추론
  let aaa = "안녕하세요";
  aaa = 3;

  // 타입 명시
  let bbb: string = "반갑습니다";
  bbb = 10;

  // 타입 명시가 필요한 상황
  let ccc: number | string = 1000;
  ccc = "1000원";

  // 숫자 타입
  let ddd: number = 10;
  ddd = "철수";

  // boolean 타입
  let eee: boolean = true;
  eee = false;
  eee = "false"; // true

  // 배열 타입
  let fff: number[] = [1, 2, 3, 4, 5, "안녕하세요"];
  let ggg: string[] = ["철수", "영희", "훈이", 10];
  let hhh: (string | number)[] = [1, 2, 3, 4, 5, "안녕하세요"];

  //객체 타입
  interface IProfile {
    name: string;
    age: number | string;
    school: string;
    hobby?: string; // 있어도 되고 없어도 됨
  }
  let profile: IProfile = {
    name: "철수",
    age: 9,
    school: "공룡초등학교",
  };
  profile.name = "훈이";

  // 함수 타입 -> 어디서든 몇번이든 호출 가능하므로, 타입 추론 안됨
  function add(num1, num2, unit) {
    return num1 + num2 + unit;
  }
  add(1000, 2000, "원");

  // 함수 타입 1
  function add1(num1: number, num2: number, unit: string): string {
    return num1 + num2 + unit;
  }
  const result1 = add1(1000, 2000, "원"); //결과의 리탄 타입도 알 수 있음

  // 함수 타입 2 (화살표 함수)
  const add2 = (num1: number, num2: number, unit: string): string => {
    return num1 + num2 + unit;
  };
  const result2 = add1(1000, 2000, "원"); //결과의 리탄 타입도 알 수 있음

  // any 타입 : 무엇이든 가능하다(JS랑 별반 다르지 않음)
  let qqq: any = "철수";
  qqq = 123;
  qqq = true;



  return <></>
};
