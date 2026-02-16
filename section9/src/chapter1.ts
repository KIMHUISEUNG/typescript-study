/**
 * 분산적인 조건부 타입
 *
 * 조건부 타입이 유니온 타입으로 들어온다면, 각각 따로 분리되어 들어와 처리된다.
 * 즉 기존의 동작과 차이점이 존재한다.
 */

//만약 분산을 방지하고 싶다면
//아래의 코드 처럼 [] 대괄호를 활용하면 된다.
//type StringNumberSwitch<T> = [T] extends [number] ? string : number;

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;
let c: StringNumberSwitch<number | string>;
// StringNumberSwitch<nubmer> |
// StringNumberSwitch<string>

let d: StringNumberSwitch<boolean | number | string>;
//1단계
//StringNumberSwitch<boolean> |
//StringNumberSwitch<number> |
//StringNumberSwitch<string>

//2단계
//number |
//string |
//number

//결과
//number | string

/**
 * 실용적인 예제
 */

//never는 공집합이다. 때문에 합집합 연산이 이뤄지면 사라진다.
//아래 예시는 제네릭 T타입들에서 U타입을 제외시기는 기능을 하고 있다.

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
//1단계
//Exclude<number, string> |
//Exclude<string, string> |
//Exclude<boolean, string>

//2단계
//number |
//never |
//boolean

//결과
//number | boolean

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
