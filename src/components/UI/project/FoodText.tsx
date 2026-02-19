import styles from "./Project.module.scss";

export function FoodIntroduction() {
  return (
    <p className={styles["item__content--introduction"]}>
      Oh my food explores how motion and subtle interactions can turn a{" "}
      <br className={styles["item__break--ipad"]} /> simple interface into a{" "}
      <br className={styles["item__break--desktop"]} />
      smoother, more intuitive experience.
    </p>
  );
}

export function FoodCore() {
  return (
    <p className={styles["item__content--core"]}>
      Beyond structure, this project explores how motion can guide users and{" "}
      <br className={styles["item__break--ipad"]} />
      strengthen a brand’s identity. By{" "}
      <br className={styles["item__break--desktop"]} /> using subtle animations
      and rigorous CSS <br className={styles["item__break--ipad"]} />
      architecture, I designed an interface that contribute to a more{" "}
      <br className={styles["item__break--desktop"]} /> engaging{" "}
      <br className={styles["item__break--ipad"]} />
      and consistent browsing experience. The result is a digital experience
      that <br className={styles["item__break--ipad"]} />
      goes beyond simply <br className={styles["item__break--desktop"]} />{" "}
      providing information, actively captivating users and{" "}
      <br className={styles["item__break--ipad"]} />
      encouraging engagement.
    </p>
  );
}

export function FoodConclusion() {
  return (
    <p className={styles["item__content--conclusion"]}>
      This project reflects my approach to creating interfaces that are
      beautiful, <br className={styles["item__break--ipad"]} />
      responsive and designed to{" "}
      <br className={styles["item__break--desktop"]} /> engage without
      overwhelming.
    </p>
  );
}
