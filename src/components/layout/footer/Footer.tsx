import style from "./Footer.module.scss";

function Footer() {
  return (
    <footer>
      <ul className={style["footer__link"]}>
        <li className={style["footer__link--repo"]}>
          <a href="#">GitHub</a>
        </li>
        <li className={style["footer__link--mail"]}>
          <a href="#">Email</a>
        </li>
        <li className={style["footer__link--social"]}>
          <a href="#">Linkedin</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
