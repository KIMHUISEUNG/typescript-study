/**
 * Unknown 타입
 * 모든 타입의 슈퍼타입(전체집합)
 */
function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // 오류코드
  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let bool: boolean = unknownVar;
}

/**
 * Never 타입
 * 모든 타입의 서브타입(부분집합)
 * 공집합
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // 오류 코드
  // let never1: never = 10;
  // let never2: never = "string";
  // let never3: never = true;
}

/**
 * Void 타입
 */

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    //return undefined;
  }

  let voidVar: void = undefined;
}

/**
 * any 타입
 * 업케스팅 다운케스팅 체제를 전부 무시할 수 있는 치트키 타입 때문에
 * 사용자체를 권하지 않음
 * 예외적으로 never타입으로 다운케스팅하는 것은 불가능하다.
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = undefinedVar;

  undefinedVar = anyVar;

  //neverVar = anyVar;
}
