# React 변수 알아보기

## JSX 변수 활용

- `/src/components/Pop.jsx` 생성
  : rafce (React Arrow Function Component Export)
- 1. 컴포넌트는 html 을 배치한다.
- 2. 컴포넌트는 css 를 배치한다.
- 3. 컴포넌트에 js 를 활요한다.

## 1.1 JSX 에 변수 출력 하는 법

- 보간법 : {중괄호 표기법}

```jsx
const Pop = () => {
  const title = "팝업제목";
  const data = "팝업내용";
  return (
    <div>
      <h1>{title}</h1>
      <p>{data}</p>
    </div>
  );
};
export default Pop;
```

### 1.2. JSX 에 보간법을 이용한 css 출력

#### 1.2.1. 인라인방식

- 복잡하다.
- style={{속성명: 속성값, 속성명: 속성값,...}}

```jsx
const Pop = () => {
  const title = "팝업제목";
  const data = "팝업내용";
  return (
    <div>
      <h1 style={{ color: "red", fontSize: "12px" }}>{title}</h1>
      <p>{data}</p>
    </div>
  );
};
export default Pop;
```

#### 1.2.2. 객체 리터럴 오브젝트 방식

```jsx
// 전역 코딩자리
const Pop = () => {
  const title = "팝업제목";
  const data = "팝업내용";
  //   CSS 에 역할을 하는 객체 리터널은 변수명을 파스칼로 한다.(관례)
  const TitleStyle = { color: "red", fontSize: "12px" };
  // 지역 코딩 자리
  return (
    <div>
      <h1 style={TitleStyle}>{title}</h1>
      <p>{data}</p>
    </div>
  );
};

export default Pop;
```

#### 1.2.3. 객체 리터럴 오브젝트 는 가능하면 .js 에 export 형식 권장

- `/src/components/pop.js` (확장자 조심)

```js
export const TitleStyle = { color: "red", fontSize: "12px" };
export const BodyStyle = { color: "green", fontSize: "11px" };
```

```jsx
import { BodyStyle, TitleStyle } from "./pop";

// 전역 코딩자리
const Pop = () => {
  const title = "팝업제목";
  const data = "팝업내용";
  //   CSS 에 역할을 하는 객체 리터널은 변수명을 파스칼로 한다.(관례)

  // 지역 코딩 자리
  return (
    <div>
      <h1 style={TitleStyle}>{title}</h1>
      <p style={BodyStyle}>{data}</p>
    </div>
  );
};

export default Pop;
```

## 2. CSS-in-JS

- Styled Component
- Emotion (현재 유행)

### 2.1. Emotion 환경 구성

- `npm i @emotion/react @emotion/styled`
- `vscode-styled-components` 플러그인 설치

### 2.2. 장점

- 태그만 보아도 어떤 내용을 보여주는 지 알 수 있다.
- 별도의 컴포넌트.jsx 안만들어도 된다.
- CSS 도 함께 작성 할 수 있다.

```jsx
import styled from "@emotion/styled";
import { BodyStyle, TitleStyle } from "./pop-style";

const Pop = () => {
  const title = "팝업제목";
  const data = "팝업내용";
  const PopupTitle = styled.h1`
    color: hotpink;
    font-size: 20px;
    text-align: center;
  `;
  const SlideDiv = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: green;
  `;
  const BannerDiv = styled.div``;
  const NoticeDiv = styled.div``;

  return (
    <div>
      <PopupTitle style={TitleStyle}>{title}</PopupTitle>
      <p style={BodyStyle}>{data}</p>

      <div className="slide-div">슬라이드</div>
      <div className="banner-div">배너</div>
      <div className="notice-div">공지사항</div>

      <SlideDiv>슬라이드</SlideDiv>
      <BannerDiv>배너</BannerDiv>
      <NoticeDiv>공지사항</NoticeDiv>
    </div>
  );
};
export default Pop;
```

### 2.3. Props 전달 가능

- Emotion 에서 props 가 무엇인지 이해 후
- JSX 에서도 그대로 이해하면 됨.

```js
const BannerDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.www || 100}px;
  height: ${props => props.hhh || 100}px;
  background-color: ${props => props.bg || "red"};
```
