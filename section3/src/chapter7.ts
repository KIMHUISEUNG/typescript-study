/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은타입에서 좁으타입으로
 * 타입을 상황에 따라 좋비는 방법을 이야기
 *
 * if (typeof value === "number") {} 이렇게 시용하는 걸 타입 가드라고 부른다.
 *
 * typeof 대신에 instanceof를 사용해서 타입 가드를 하면 세부적으로 제어할 수 있다.
 * instanceof는 엄밀히 왼쪽의 벨류가 오른쪽의 클래스의 인스턴스인지를 확인하는 것 때문에
 * 커스텀 타입을 적용시키려고하면 오류가남.
 */

type Person = {
  name: string;
  age: number;
};

// value => number: toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => person : name은 age살 입니다.
function func(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}
