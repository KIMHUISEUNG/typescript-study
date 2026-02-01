/**
 * 첫번째 사례
 */

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

/**
 * 두번째 사례
 *
 * 어떤 값이 들어 올지 모르는 상태이기 때문에 기본적으로 언노운 타입
 * 두번째 사례같은 경우 배열타입 접근을 시도하기 때문에 언노운 배열 타입으로 명시해줘야 함.
 * <T>(data: T[]){}
 *
 *
 */

function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
//0

let str = returnFirstValue([1, "hello", "mynameis"]);
//"hello"

/**
 * 세번째 사례
 *
 * 데이터의 길이가 없는 데이터도 호출 가능한 상태 해결
 * extends 로 length를 갖고 있는 값만 허용 한다 명시할 수 있음.
 */

function getLength<T extends { length: number }>(data: T) {
  return data.length;
}
let var1 = getLength([1, 2, 3]); //3
let var2 = getLength("12345"); //5
let var3 = getLength({ length: 10 }); //10

//let var4 = getLength(10);
//나오는 타입에러 문구
//number 형식의 인수는 {length: number;} 형식의 매개 변수에 할당될 수 없다.
