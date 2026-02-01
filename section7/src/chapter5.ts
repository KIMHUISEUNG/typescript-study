/**
 * 프로미스
 *
 * 비동기 처리시 상황을 명시적으로 타입 선언할 수 있다.
 * resolve의 상황에선 결과값의 타입을 명시할 수 있지만
 * reject의 상황에선 결과값의 타입을 명시할 수 없다.
 * 때문에 reject 상황에서 catch사용 할때엔 타입 좁히기를 사용한다.
 */

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    //resolve(2);
    reject("~~~ 때문에 실패");
  }, 3000);
});

promise.then((response) => {
  console.log(response * 10); //20
});

promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
  id: number;
  title: string;
  content: string;
}

//Promise도 타입으로 취급할 수 있기 때문에 아래처럼 사용가능
//함수에 반환값 타입을 명시하는 것을 추천
function fetchPost(): Promise<Post> {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 컨텐츠",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});
