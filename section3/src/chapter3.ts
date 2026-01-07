/**
 * 기본 타입간의 호환성
 * ->특정 타입을 다른 타입으로 취급해도 괜찮은지 판단
 */

/**
 * 객체 타입간의 호환성은
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 *
 * 구조적 타입 시스템
 * -> 프로퍼티를 기준으로 결정되는 객체타입간의 호환성
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog;

//dog = animal;

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리엑트",
  price: 33000,
  skill: "reactjs",
};

/**
 * 초과 프로퍼티 검사
 * 값을 초기화하는 단계에서 타입이 정의하고 있지 않는 값을 초과하는 값이 들어오면 안되도록 막는 검사.
 */
let book2: Book = {
  name: "한 입 크기로 잘라먹는 리엑트",
  price: 33000,
  // skill: "reactjs",
};

//초과 프로퍼티 검사를 허용하는 경우
//변수로 지정해서 사용
let book3: Book = programmingBook;

function func(book: Book) {}
//합수에 직접 넣으면 초과검사 함
func({
  name: "한 입 크기로 잘라먹는 리엑트",
  price: 33000,
  // skill: "reactjs",
});
//변수에 담긴 타입을 넘기면 초과검사 안함
func(programmingBook);
