/**
 * 함수 타입 표현식
 */
//type 별칭을 이용해 깔끔한 함수를 구현할 수 있다.
type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

/**
 * 호출 시그니쳐
 * (콜 시그니쳐)
 */

type Operation2 = {
  (a: number, b: number): number;
  //name: string;
  //위 처럼 타입을 추가할 수 있는데 이렇게 사용하는 것을 하이브리드 타입이라고 한다.
  //자세한 사항은 검색해서 알아보자
};

//호출 시그니쳐는 아래의 함수의 타입 선언 부분으 따로 때어 정의한느 것으로 보면됨
//function func(a: number): void {}

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;
