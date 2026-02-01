/**
 * 제네릭 (일반적인, 범용적인)
 * 이해를 돕기위해 종합병원(제너럴 호스피털)과 비슷하다고 설명하기도한다.
 *
 *
 */

//<T> : 타입 변수라고 부른다.
//함수를 호출 할 때 인수에 따라서 값이 결정된다.
function func<T>(value: T): T {
  return value;
}

let num = func(10);

if (typeof num === "number") {
  num.toFixed();
}

let bool = func(true);

let str = func("string");

//개발자가 명시적으로 제네릭 타입을 작성한다면 반환값을 제어할 수 있다.
let arr = func<[number, number, number]>([1, 2, 3]);
