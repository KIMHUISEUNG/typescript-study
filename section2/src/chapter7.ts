//void
//void -> 공허 -> 아무것도 없다.
//void -> 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}
// func1은 string 타입을 반환하는 함수이다. func2는 아무것도 반환
// 하고있지 않은데 이럴 때 사용하는 타입이 void 타입이다.
// undefind나 null 타입을 사용하지 않는 것은 굳이 return값을 넘겨줘야하기 때문이다.

//never
//never -> 존재하지 않는
//불가능한 타입
//반환값이 있을 수 없는 함수 즉 반환값이 있다는 것이 모순인 함수에 사용.

function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}
