/**
 * 조건부 타입
 */

type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

/**
 * 제네릭과 조건부 타입
 *
 * 조건부 타입은 제네릭과 함께 많이 활용된다.
 */

//제네릭 변수 T 에 number 타입이 들어오면 참 값인 string이 되고,
//number가 아닌 타입이 들어오면 거짓 값인 string타입이 된다.
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;

let varB: StringNumberSwitch<string>;

//함수 오버로딩 타입을 따로 분리 해서 함수가 제네릭변수의 undefined 문제를 해결할 수 있음
function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi im hatso");
result.toUpperCase();

let result2 = removeSpaces(undefined);
