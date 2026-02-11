/**
 * keyof 연산자
 *
 * keyof 객체
 * 는 유니온 타입으로 처리해준다.
 *
 * keyof 연산자는 무조건 타입에만 사용가능하다.
 * typeof를 활용할 수 있다.
 */

// interface Person {
//   name: string;
//   age: number;
// }
type Person = typeof person;

function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: "김희성",
  age: 29,
};

getPropertyKey(person, "name");
