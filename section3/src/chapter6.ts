/**
 * 타입 단언 assertion
 * as 키워드로 사용가능
 */

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "김희성";
person.age = 29;

/**
 * 타입 단언의 규칙
 * 값 as 단언<- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */
let num1 = 10 as never;
let num2 = 10 as unknown;

//다중 단언이 가능은 하다. 이또한 치트키 같은 방법으로 비추천
let num3 = 10 as unknown as string;

/**
 * const 단언
 * const로 선언한 것같은 효과를 준다.
 * 객체에 사용했을 때 특별한 효과를 주는데 객체의 값들을 읽기 전용 속성으로 바꾸어
 * 재 할당 불가능하게 만든다.
 */

let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

/**
 * Non Null 단언
 * 어떤 값이 Non 이나 Null 값이 아니라고 컴파일러에게 알려주는 역할을 한다.
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "김희성",
};

// ?(옵셔널체이닝)은 값이 없다면 undefined를 반환해주고
// !(Non Null단언)은 값이 무조건 있다고 믿게해서 작동하게끔 한다.
const len: number = post.author!.length;

//타입 단언은 실제로 타입을 바꾸는 방법이 아니라 컴파일러의 눈을 가리거나 속인다 등의 표현이 어울리는 작업이다.
//때문에 단언은 위험한 방법에 속하고 확실한 때에만 사용해야한다.
