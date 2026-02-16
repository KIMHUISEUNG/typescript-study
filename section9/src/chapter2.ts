/**
 * infer
 * inference => 추론하다
 */

type FuncA = () => string;

type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>;
type B = ReturnType<FuncB>;

// C는 추론 불가
type C = ReturnType<number>; //never

/**
 * 예제
 *
 * Promise<number> 타입이 Promise<infer R>의 서브타입이 되는 것을 추론하는 동작
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
//1. T는 프로미스 타입이어야 한다.
//2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>;
//number

type PromiseB = PromiseUnpack<Promise<string>>;
//string
