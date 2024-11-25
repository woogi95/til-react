# React 컴포넌트 만들기

## 1. 컴포넌트 란?

- 웹 페이지의 `각 요소 중` 재활용이 되는 내용을 별도의 `jsx` 로 생성한 것
- 예) Header.jsx, Footer.jsx 등

## 2. component 와 page 를 구분해 본다.

- 수업 중에 `page` 라고 얘기하면 `component` 들을 모아서 하나의 페이지를 구성한다는 의미.
- `폴더는 무조건 소문자` - Window 에서는 대소문자 구분안함.
- 추후에 `pages` 폴더를 생성해야 함. (`폴더는 무조건 소문자`)
- 추후에 `components` 폴더를 생성해야 함.

## 3. 컴포넌트의 이해

### 3.1. html 을 React 에서는 `jsx` 라고 호칭함.

- `js 로 html 을 생성하는 역할`
- 함수명이 대문자로 시작한 파스칼 케이스
- JSX 를 출력하는 함수는 파스칼 케이스를 써야한다는 규칙이 있음.
- JSX 를 출력하는 함수는 반드시 `return` () 구문이 있어야 한다는 규칙이 있음.
- `()` 안쪽에 HTML 형식을 작성한다.
- JSX 는 `html 태그 형식`으로 호출(call)함
- JSX 는 반드시 `Root` 태그가 존재해야 한다.
- 용도가 묶음을 만드는 것 외에 없는 Root 라면 `<></>` Fragment 로 묶어준다.

```js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function IndexPage() {
  return (
    <>
      <header>상단</header>
      <main>메인</main>
      <footer>하단</footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <IndexPage></IndexPage>
  </StrictMode>,
);
```

### 3.2. 각 `화면의 기능`에 따라서 파일을 분리한다.

- `협업`을 해야 하므로 각 기능별 단위마다 별도의 컴포넌트 파일 필요.
- `/src/pages` 폴더에는 URL 에 주소에 맞는 페이지 배치
- `/src/components` 폴더에는 각각의 페이지에 배치될 html 요소들 배치

- /src/components/Header.jsx

```jsx
const Header = () => {
  return (
    <header>
      <a href="#">로고</a>
      <div>
        <ul>
          <li>
            <a href="#">주메뉴</a>
          </li>
          <li>
            <a href="#">주메뉴</a>
          </li>
          <li>
            <a href="#">주메뉴</a>
          </li>
          <li>
            <a href="#">주메뉴</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
```

- /src/components/Footer.jsx

```jsx
const Footer = () => {
  return (
    <footer>
      <a href="">로고</a>
      <div>카피라이터</div>
      <div>SNS</div>
    </footer>
  );
};

export default Footer;
```

- /src/pages/IndexPage.jsx

```jsx
import Footer from "../components/Footer";
import Header from "../components/Header";

function IndexPage() {
  return (
    <>
      <Header></Header>
      <main>
        <div>공지사항/갤러리</div>
        <div>배너</div>
        <div>바로가기</div>
      </main>
      <Footer></Footer>
    </>
  );
}
// 외부에서 활용하도록
export default IndexPage;
```

- /src/main.jsx

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import IndexPage from "./pages/IndexPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <IndexPage></IndexPage>
  </StrictMode>,
);
```
