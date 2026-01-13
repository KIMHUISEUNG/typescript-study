/**
 * 인터페이스의 확장(상속)
 * 중복되는 타입 정의 코드를 인터페이스를 활용해서 정의할 수 있음
 *
 * Dog에서 프로퍼티를 재정의 할 수 있다. 하지만
 * 아래 코드에서 Animal타입이 Dog 타입보다 슈퍼타입이여야한다.
 * 즉 원본 프로퍼티 타입의 서브타입이여야 한다.
 */

interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  isBark: boolean;
}

interface Cat {
  isScratch: boolean;
}

interface Cicken {
  isFly: boolean;
}
//interface의 다중 확장
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
};
