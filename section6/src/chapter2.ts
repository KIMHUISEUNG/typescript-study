/**
 * 타입스크립트의 클래스에서만 사용가능한 접근 제어자
 *
 * 접근 제어자
 * access modifier
 * => public private protected
 *
 * 클래스의 요소는 기본적으로 public이 생략되어 있는 형태이다.
 * public name: string;
 *
 * private는 클래스 내부에서만 사용할 값이라고 설정 즉 외부에서 사용 불가능
 * 또한 클래스안의 메서드에서는 사용 가능
 * 추가로 파생클래스 즉 상속받는 등의 클래스에서도 접근할수 없다.
 *
 * 여기서 외부에서는 사용불가능하고 파생 클래스에서는 사용가능하게 하고 싶다면
 * protected를 선언해 주면된다.
 *
 * 생성자에서 접근 제어 선언을 하면 필드를 자동으로 생성한다. 때문에 우리가 명시적으로
 * 두번 선언할 필요가없다.
 */
class Employee {
  //필드

  //생성자
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {}

  //메서드
  work() {
    console.log("일함");
  }
}

const employee = new Employee("김희성", 28, "developer");
// employee.name = "홍길동";
// employee.age = 30;
employee.position = "디자이너";
