//enum 타입
// 열거형 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

//숫자로 권한을 설정하고 개발하다보면 까먹는 상황이 생김
//enum 타입을 사용해 이러한 실수를 막을 수 있다.
//enum에 값을 지정하지 않으면 기본값으로 위에서부터 아래로 0번부터 1,2,3 식으로 숫자가 부여된다.
//숫자형 enum은 값을 지정하면 지정한 곳을 기준으로 다음 요소에 증가값을 지정한다.
enum Role {
  ADMIN,
  USER = 10,
  GUEST,
}
enum Language {
  korean = "ko",
  american = "eng",
}

const user1 = {
  name: "김희성",
  role: Role.ADMIN, //0 <-관리자
  language: Language.korean,
};
const user2 = {
  name: "홍길동",
  role: Role.USER, //1 <-일반 유저
  language: Language.american,
};
const user3 = {
  name: "아무개",
  role: Role.GUEST, //2 <-게스트
};

console.log(user1, user2, user3);
