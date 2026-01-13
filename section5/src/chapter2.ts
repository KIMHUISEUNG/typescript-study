/**
 * 선언 합침
 *
 * 인터페이스는 동일한 이름으로 중복 선언이 가능.
 * 중복 선언하면 모든 선언이 합쳐지게 된다.
 *
 * 만약 동일한 이름에서 동일 프로퍼티를 다른 타입으로
 * 재정의하려한다면 이것을 충돌이라고 하고 허용하지 않는다.
 *
 */

interface Person {
  name: string;
}

interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  name: "hello";
}

const person: Person = {
  name: "",
  age: 27,
};

/**
 * 모듈 보강
 * 보통의 라이브러리들은 타입정의가 끝나있다. 우리가 임의로 객체를 추가할 수 있는상태
 * 그래서 이럴 때 선업합침을 사용해서 해결
 */
interface Lib {
  a: number;
  b: number;
}

const lib = {
  a: 1,
  b: 2,
};
