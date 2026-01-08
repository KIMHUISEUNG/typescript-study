/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
 *
 * 체크리스트
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 * 이 두가지 조건이 만족해야 비로소 호환된다라고 할 수 있다.
 */
//기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

// a=b;

// b=a; 오류
//반환값이 호환되는가의 기준은 반환값이 다운캐스팅이 되면 안되는것이다.
//업캐스팅은 괜찮다.

//결론 : 업캐스팅이 되는 상황은 호환이 된다. 다운캐스팅이 되는 상황은 호환이 안된다.

//기준2. 매개변수가 호환되는가
//2-1. 매개변소의 개수가 같을 때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

//c = d;
d = c;

type Animal = {
  name: string;
};
type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

//animalFunc = dogFunc;
dogFunc = animalFunc;

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  //console.log(animal.color);
  //이렇게 업케스팅을 허용하면 발생할 문제를 막기위해 매개변수일 때엔 다운캐스팅만을 허용한다.
};

let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

//2-2. 매개변수의 개수가 다를 때
//할당하려는 쪽의 개수가 적어야 호환 가능
//추가적으로 개수에 문제가 없더라도 매개변수의 타입이 달라버리면 호환이 안된다.

//type Func1 = (a: string, b: number) => void; 이러면 호환 안됌
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
//func2 = func1;

/**
 * 최종 결론 함수 타입의 호환성을 결정하는 기준은 크게 두가지로
 * 반환값과 매개변수이다.
 * 반환값은 업캐스팅에 호환성을 보이고, 매개변수는 다운캐스팅에 호환성을 보인다.
 */
