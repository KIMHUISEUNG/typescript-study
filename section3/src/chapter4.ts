/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재한다.
 */

/**
 * 1. 합집합 - Union 타입
 * | 이 문자는 합집합 문자이다.
 * 합집합을 추가하는 건 무제한이다.
 */

let a: string | number | boolean;
a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

// 합집합 한 타입을 하나의 타입처럼 사용가능
type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};
let union2: Union1 = {
  name: "",
  language: "",
};
let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// let union4: Union1 = {
//   name: "",
// };
// union4는 합집합 바깥에 포함된 값으로 에러가 난다.

/**
 * 2. 교집합 타입 - Intersection 타입
 * 교집합만 올수 있으므로 교집합 요소를 전부 포함 해야한다.
 */
let variable: number & string;

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};
