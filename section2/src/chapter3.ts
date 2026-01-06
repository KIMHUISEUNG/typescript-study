// object
//객체리터럴타입
let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "김희성",
};

let dog: {
  name: string;
  color: string;
} = {
  name: "모찌",
  color: "brown",
};

user.id;

//구조를 기준으로 타입을 지정하기 때문에 이러한 시스템을
//구조적 타입 시스템이 또는 Property Based TS 이라고 한다.

//추가적으로 이름을 기준으로 타입을 지정하는 것은 명목적 타입 시스템이라고 한다.

user = {
  name: "홍길동",
};
//let user: {
//  id?: number;
// ...
//} = {...}
// 있어도 되고 없어도 되는 Property라면 선택적(optional) Property로 지정하면 된다.
// 방법은 "?"를 붙이는 것이다.

let config: {
  readonly apikey: string;
} = {
  apikey: "MY API KEY",
};
// 절대 바뀌면 안되는 값을 readonly 옵션을 통해 보호할 수 있다.

//config.apikey = "hacked";
