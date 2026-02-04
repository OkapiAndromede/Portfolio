import styles from "./Project.module.scss";

export function BookiIntroduction() {
  return (
    <p className={styles["item__content--introduction"]}>
      Booki is a project focused on building{" "}
      <br className={styles["item__break--mobile"]} />
      a responsive interface that <br className={styles["item__break--ipad"]} />
      faithfully follows <br className={styles["item__break--mobile"]} /> a
      designer’s <br className={styles["item__break--desktop"]} />
      mockups.
    </p>
  );
}

export function BookiCore() {
  return (
    <p className={styles["item__content--core"]}>
      It represents the essential first step of any web project: establishing{" "}
      <br className={styles["item__break--ipad"]} />
      strong HTML and CSS foundations.{" "}
      <br className={styles["item__break--ipad item__break--desktop"]} />
      The layout is carefully structured to ensure visual consistency,{" "}
      <br className={styles["item__break--ipad"]} />
      accessibility, and a smooth navigation{" "}
      <br className={styles["item__break--desktop"]} /> experience across
      mobile, tablet, <br className={styles["item__break--ipad"]} />
      and desktop devices.
    </p>
  );
}

export function BookiConclusion() {
  return (
    <p className={styles["item__content--conclusion"]}>
      This project highlights my attention to detail and my belief that a clean,{" "}
      <br className={styles["item__break--ipad"]} />
      well-structured front-end is the basis{" "}
      <br className={styles["item__break--desktop"]} /> for any product meant to
      grow and <br className={styles["item__break--ipad"]} />
      evolve over time.
    </p>
  );
}
