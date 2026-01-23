import styles from "./Navbar.module.scss";

function NavBar() {
  return (
    <>
      <div className={styles["navBar"]}>
        <ul className={styles["navbar__link"]}>
          <li className={styles["navbar__link--work"]}>
            <a href="#">Work</a>
          </li>
          <li className={styles["navbar__link--expertise"]}>
            <a href="#">Expertise</a>
          </li>
          <li className={styles["navbar__link--about"]}>
            <a href="#"> About</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
