import styles from "./Navbar.module.scss";

function NavBar() {
  return (
    <>
      <div className={styles["navBar"]}>
        <ul className={styles["navbar__link"]}>
          <li className={styles["navbar__link--work"]}>
            <a href="#projectSection">Work</a>
          </li>
          <li className={styles["navbar__link--expertise"]}>
            <a href="#expertiseSection">Expertise</a>
          </li>
          <li className={styles["navbar__link--about"]}>
            <a href="#aboutSection"> About</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
