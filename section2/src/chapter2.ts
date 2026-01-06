//배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["A", "B", "C"];
let boolArr: Array<boolean> = [true, false, true];

//배열의 요소가 다양할 경우
let multArr: (string | number | boolean)[] = ["A", 2, true];

//다차원 배열
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

//튜플
//길이와 타입이 고정된 배열
//튜플이라고 해도 컴파일 결과적으로 배열이기 때문에 Pop(), Push()같은 함수가 사용가능하다.
//때문에 사용에 주의가 필요하다.

let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "A", true];

const users: [string, number][] = [
  ["김희성", 1],
  ["이순신", 2],
  ["홍길동", 3],
  ["홍범도", 4],
];
