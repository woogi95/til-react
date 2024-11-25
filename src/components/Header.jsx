import style from "./header.module.css";
const Header = () => {
  return (
    <header>
      <div className={style.layout}>
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
      </div>
    </header>
  );
};

export default Header;
