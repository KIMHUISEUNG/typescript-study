//any
//특정 변수의 타입을 우리가 확실히 모를때
//any타입에는 어떤 타입이던 집어넣을 수 있고 any타입은 어떤 값에든 할당할 수 있다.
//any타입은 타입스크립트의 이점을 모두 포기한다는 것과 마찬가지임으로 되도록 사용하지 안는 걸 권한다.
//타입검사를 무시하는 치트키같은 존재 빌드과정에서 오류를 발생시킬 수 있는 요소.

let anyVar: any = 10;

let num: number = 10;
num = anyVar;

//unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

//타입 정제라는 개념이 있는데 타입정제에 unknown 타입을 활용하기 도 한다.
if (typeof unknownVar === "number") {
  num = unknownVar;
}

//unknown은 any랑 달리 값을 저장은 할 수 있지만 할당은 불가능한 차이점이 있다.
//메서드나 덧셈 뺄셈같은 연산도 사용할 수 없다.
