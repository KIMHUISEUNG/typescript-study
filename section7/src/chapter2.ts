/**
 * map, forEach의 타입 정의하기
 *
 * 1.map 메서드
 */

const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2);
//[2,4,6]

//map함수 만들어 보기
function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

//it의 타입이 arr요소의 타입이 되어야 한다.
map(arr, (it) => it * 2);
//map 메서드는 반환값의 타입을 변환하려는게 가능해야한다.
//때문에 반환값제너럴 변수를 추가해서 해결해야한다.
map(["hi", "hello"], (it) => parseInt(it));

/**
 * 2. forEach
 * 첫번째 매개변수로 받은 배열의 타입을 콜백함수에게 알려주는 정의
 */

const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr2, (it) => {
  console.log(it.toFixed());
});
forEach(["123", "456"], (it) => {
  it;
});
