import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

const PublishPage = () => {
  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          로고
        </a>
        <nav className="gnb">메뉴</nav>
      </header>

      <main className="main">
        <div className="slide">슬라이드</div>
        <div className="content">
          <div className="notice">공지사항</div>
          <div className="banner">배너</div>
          <div className="link">바로가기</div>
        </div>
      </main>

      <footer className="footer">
        <a href="#" className="footer-logo">
          로고
        </a>
        <p className="copyright">Copyright</p>
        <div className="sns">SNS</div>
      </footer>
    </>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PublishPage></PublishPage>
  </StrictMode>,
);
