/**
 * 맵드 타입
 *
 * interface로 재정의는 불가능
 * type 객체로 재정의해서 사용 활용도가 매우 높고 실무에서 자주 사용하는 개념
 *
 */

interface User {
  id: number;
  name: string;
  age: number;
}
type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};
type BooleanUser = {
  [key in keyof User]: boolean;
};
type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

//한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  //...기능
  return {
    id: 1,
    name: "김희성",
    age: 30,
  };
}

//한명의 유저 정보를 수집하는 기능
function updateUser(user: User) {
  //... 수정하는 기능
}

updateUser({
  id: 1,
  name: "김희성",
  age: 25,
});
