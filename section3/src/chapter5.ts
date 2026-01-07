/**
 * 타입 추론
 * 배우는 단계에서는 하나하나 타입을 지정해 주었지만 타이핑량을 줄여 생산성을
 * 높이기위해 타입 추론의 성질을 활용한다.
 * 주의할 점은 함수의 매개변수 같은 등 특정 상황에서는 오류가 날 수 있다.
 *
 * 변수의 초기값을 기준으로 타입을 추론한다.
 * let으로 넘버타입을 추론해서 사용하는 것을 타입 넓히기 라고 부른다. 범용성이 올라기기 때문이다.
 */

let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "김희성",
  profile: {
    nickname: "hatso",
  },
  urls: ["https://hatso.com"],
};
let { id, name, profile } = c;
let [one, two, three] = [1, "hello", true];

//함수는 반환값을 기준으로 타입을 추론한다.
function func(message = "hello") {
  return "hello";
}

//암묵적 any 타입의 진화 (동작엔 문제없는데 비추천)
//추가적으로 명시적 any타입과 암묵적 any타입은 동작이 다르다.
let d;
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();

const num = 10;
const str = "hello";

let arr = [1, "string"];
