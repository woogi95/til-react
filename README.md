# React 컴포넌트 만들기

- html 즉 jsx 작성하기

## 컴포넌트에 css 추가하기

- 파일이 있는 곳에 css도 같이 두기를 권장함. -`css 규칙은 권장하기로 컴포넌트명과 동일한 css 판정`

## 2. css 추가 및 적용 하는 법

### 2.1. css 라이브러리 활용

- `index.html` 에 `link` 권장함.

- `reset.css`
  : https://meyerweb.com/eric/tools/css/reset/
  : 나중에 `npm install` 활용

- `normalize.css`
  : https://necolas.github.io/normalize.css/
  : 나중에 `npm install` 활용

- `폰트어썸`
  : https://cdnjs.com/libraries/font-awesome
  : 아이콘 글꼴 - 나중에 `npm install` 활용

- `구글 글꼴`
  : https://fonts.google.com
  : 나중에 `index.css 에 작성` 가능

```html
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React 학습</title>
    <!-- reset.css -->
    <link
      rel="stylesheet"
      href="https://meyerweb.com/eric/tools/css/reset/reset.css"
    />
    <!-- normalize -->
    <link
      rel="stylesheet"
      href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"
    />
    <!-- fontawsome -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
    />
    <!-- google 폰트 -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### 2.1. 전체 css 에 `공통 적용`이 필요한 경우

- `/src/index.css` 를 활용하시길 권장함.

```css
:root {
  --primary-color: #000000;
  --secondary-color: #0000ff;
  --font-size-base: 16px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: #000000;
}
ul,
li {
  list-style: none;
}
html {
  font-size: 16px;
}
body {
  font-size: var(--font-size-base);
  color: var(--primary-color);
}
/* 웹서비스 개발시 권장함.(개인적으로) */
html,
body,
:root {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
```

### 2.2. module.css 방식

- 컴포넌트라면 분명 `협업을 할 것`이라는 가정함.
- 협업시에 css 의 우선권 문제가 발생하여 원활한 css 가 어려움.
- 최소 `컴포넌트명.module.css` 를 준수하기를 권장함.
- `/src/components/footer.module.css`

```css
.layout {
  background-color: brown;
}
.layout a {
  color: #ffffff;
}
```

```jsx
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <footer>
      <div className={styles.layout}>
        <a href="#">로고</a>
        <div>카피라이터</div>
        <div>SNS</div>
      </div>
    </footer>
  );
};

export default Footer;
```

### 2.3. SCSS 방식

- 소스 관리가 편함.
- css 를 체계적으로 구성.
- css 에 프로그래밍적 요소로 작성 가능(변수, mixin:함수.. )

#### 2.3.1. 환경구성

- `npm i -D sass`
- `Live Sass Compiler` 플러그인 설치

#### 2.3.2. 기본 문법의 이해

- `/src/scss/` 폴더 생성 권장
- `/src/scss/test.scss` 파일 생성시 확장자 확인 필요

#### 2.3.3. 중첩 문법 (Nesting)

```scss
.wrap {
  position: relative;
  .notice {
    width: 500px;
    ul {
      li {
        background-color: blue;
      }
    }
  }
  .slide {
    width: 200px;
  }
  .banner {
    width: 300px;
  }
}
```

#### 2.3.4. 변수

```scss
$width-screen: 1680px;
$pc-screen: 1024px;
$mb-screen: 760px;
$color-bg: blue;

.wrap {
  position: relative;
  width: $width-screen;
  .notice {
    width: $pc-screen;
    ul {
      li {
        background-color: $color-bg;
      }
    }
  }
  .slide {
    width: $mb-screen;
  }
  .banner {
    width: $mb-screen;
  }
}
```

#### 2.3.5. 변수는 별도 파일로 관리하자.

- `_`로 파일명을 시작하면 css 가 생성안됨.

- `_val.scss`

```scss
$width-screen: 2000px;
$pc-screen: 1024px;
$mb-screen: 760px;
$color-bg: yellow;
```

- 변수 사용시 `@import "파일명"` 을 사용함.

```scss
@import "val";

.wrap {
  position: relative;
  width: $width-screen;
  .notice {
    width: $pc-screen;
    ul {
      li {
        background-color: $color-bg;
      }
    }
  }
  .slide {
    width: $mb-screen;
  }
  .banner {
    width: $mb-screen;
  }
}
```

#### 2.3.6. Mixins 사용하기(함수)

- 파일명을 `_`를 활용하자.(`_mixins.scss`)

```scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin border-fn($cc) {
  border: 5px solid $cc;
}
```

```scss
@import "val";
@import "mixins";

.wrap {
  position: relative;
  @include flex-center;

  width: $width-screen;
  .notice {
    @include flex-center;
    width: $pc-screen;
    ul {
      li {
        @include flex-center;
        @include border-fn("red");
        background-color: $color-bg;
        &:hover {
          background-color: pink;
        }
      }
    }
  }
  .slide {
    @include flex-center;
    width: $mb-screen;
  }
  .banner {
    @include flex-center;
    width: $mb-screen;
  }
}
```

#### 2.3.7. module.scss 만들기

- `header.module.scss` 파일 생성
