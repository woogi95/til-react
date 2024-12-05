# 리소스 최적화

## 1. 이미지

- /public 은 원본을 유지한다.
- /src 는 압축한다. (웹브라우저도 보관하고 있다.)
- 용도에 맞게 판단하자.
- 그냥 `/src`에 보관하고 사용하자.

## 2. font 파일

- font 는 가능하면 웹폰트 URL 을 사용하자.
- 구글 폰트 또는 눈누에 웹폰트 URL 이 없는 경우 직접 파일 설정
- 파일인 경우 /public 폴더에 넣어두고 활용하자.
- /src/assets 에 두시며 설정할 것이 꽤 많음.
- https://noonnu.cc/font_page/pick
- https://fonts.google.com/
- 예)

### 2.1. public/ 폴더에 파일 배치

- /src/index.css : 모든 기본적인 적용

```css
/* 글꼴 설정 */
@font-face {
  font-family: "chab";
  src: url("/chab.ttf");
}
@font-face {
  font-family: "ddag";
  src: url("/ddag.ttf");
}
body {
  font-family: "chab";
}
```

# 빌드하기

- 배포 버전 생성 : `npm run build`
- 배포 버전테스트 : `npm run preview`
