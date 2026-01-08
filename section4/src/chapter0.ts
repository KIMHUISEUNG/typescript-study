/**
 * 함수 타입 정의
 *
 * 함수를 설명하는 가장 좋은 방법
 * JS 방식으론 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
 * TS 방식으론 어떤 [타입]의 매개변수를 받고, 어떤 [타입]의 결과값을 반환하는지 이야기
 */

function func(a: number, b: number): number {
  return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 * 선택적 매개변수는 변수명 옆에 ?을 붙이면 된다. func (a?:number)
 * 필수 매개변수가 선택적 매개변수 뒤에 오면 안된다.
 */
function introduce(name = "김희성", age: number, tall?: number) {
  console.log(`name : ${name}`);
  //타입좁히기 사용으로 해결가능
  if (typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
  }
}

introduce("김희성", 28, 171);
introduce("김희성", 28);

//튜플 타입으로 길이를 지정해 줄수도 있다.
//function getSum(...rest: [number, number, number]) {
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}

getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5); // 15
