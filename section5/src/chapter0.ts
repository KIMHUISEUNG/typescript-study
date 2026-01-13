/**
 * 인터페이스
 * 이 객체는 이러한 형태를 갖춰야해 라는 규칙을 정의하는 문법
 *
 * readonly 읽기 전용 사용 가능, ? 선택적 프로퍼티 사용가능
 */

interface Person {
  readonly name: string;
  age?: number;
  sayHi: () => void;
  //함수 시그니처
  //sayHi(): void;
  //sayHi(a: number, b: number): void;
}
//메서드를 오버로드해서 사용하고 싶다면 함수 시그니처를 사용해야한다.

const person: Person = {
  name: "김희성",
  sayHi: function () {
    console.log("Hi");
  },
};
