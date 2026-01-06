//타입 별칭
//중복코드의 제거 타입 추가 편의성
//타입 별칭은 선언 할때에 스코프의 영향을 받는다는 점을 주의해야한다.
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  loaction: string;
};

let user1: User = {
  id: 1,
  name: "김희성",
  nickname: "hatso",
  birth: "1997.05.17",
  bio: "안녕하세요",
  loaction: "광주광역시",
};

let user2: User = {
  id: 1,
  name: "홍길동",
  nickname: "의적",
  birth: "1997.05.17",
  bio: "안녕하세요",
  loaction: "광주광역시",
};

//인덱스 시그니처
//반복되는 규칙이 있는 타입들을 한번에 지정하는 방법.
type CountyCodes = {
  [key: string]: string;
};

let countryCodes: CountyCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

//인덱스 시그니처는 문제가 발생할 때만 오류가 발생하고 빈객체는 문제가 발생하지 않는다. 때문에 필수적으로
//존재해야하는 값을 임의로 작성해 빈객체를 잡아낼 수 있지만 시그니처의 타입과 일치해야한다.
type CountyNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberCodes: CountyNumberCodes = {
  Korea: 410,
};
