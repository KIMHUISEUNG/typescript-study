/**
 * 인덱스드 엑세스 타입
 *
 * 인덱스를 이용해서 다른 타입내에 특정 프러퍼티 타입을 추출하는 타입
 *
 * 복잡하고 큰 타입에서 잘게 쪼개서 타입을 가져와 사용할 수 있기 때문에 유용하다.
 */

//객체 예시
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

//Post["author"] 부분에서 author는 값이 아니라 타입이다.
//추가 설명하자면 인덱스 부분에는 타입만 들어올 수 있다.
//Post["author"]["id"]도 가능하다.
function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.name}-${author.id}`);
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "김희성",
    age: 30,
  },
};
printAuthorInfo(post.author);

//배열 예시

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

function printAuthorInfo2(author: PostList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

//배열의 PostList[type]을 명시함으로서 객체타입을 뽑을 수 있다.
const post2: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "김희성",
    age: 30,
  },
};

//튜플타입 활용
//튜플 형태의 타입에서 인덱스 번호로 각 타입을 뽑아 올 수 있다.
type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
//type Tup3 = Tup[3];

//최적의 유니온 타입으로 자동정의
type TupNum = Tup[number];
