/**
 * 인터페이스와 클래스
 *
 * 접근제어자를 사용할 때 주의해야할 것
 * 인터페이스의 필드는 무조건 public 만 정의할 수 있다.
 *
 * 만약 다른 접근제어가 필요한 값이 있다면 인터페이스가 아닌 따로 명시하면 된다.
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  constructor(public name: string, public moveSpeed: number) {}
  move(): void {
    console.log(`${this.moveSpeed}속도로 이동!`);
  }
}
