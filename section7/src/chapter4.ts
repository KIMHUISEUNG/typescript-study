/**
 * 제네릭 클래스
 */

class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }
  pop() {
    return this.list.pop();
  }
  print() {
    console.log(this.list);
  }
}

const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new List(["1", "2"]);
stringList.push("hello");
//추가적으로 new List([값1,값2])에서 받는 값을 기준으로 타입을 결정하기 때문에
//new List<type>([값1,값2]) 값이 타입을 명시 하지 않아도 된다.
//이것은 제네릭 인터페이스와의 차이점이다.
