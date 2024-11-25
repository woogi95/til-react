import style from "./footer.module.css";
const Footer = () => {
  return (
    <footer>
      <div className={style.layout}>
        <a href="">로고</a>
        <div>카피라이터</div>
        <div>SNS</div>
      </div>
    </footer>
  );
};

export default Footer;
