import styles from "./Project.module.scss";

export function KasaIntroduction() {
  return (
    <p className={styles["item__content--introduction"]}>
      Kasa illustrates how modern architecture allow for the creation of{" "}
      <br className={styles["item__break--ipad"]} /> complex applications that{" "}
      <br className={styles["item__break--desktop"]} />
      are both fast and easy to evolve.
    </p>
  );
}

export function KasaCore() {
  return (
    <p className={styles["item__content--core"]}>
      For this platform, I prioritized a modular approach using React, breaking{" "}
      <br className={styles["item__break--ipad"]} /> down the interface into
      reusable <br className={styles["item__break--desktop"]} /> components to
      ensure cleaner code and <br className={styles["item__break--ipad"]} />{" "}
      simplified maintenance. This modularity serves as a powerful engine{" "}
      <br className={styles["item__break--desktop"]} />
      for <br className={styles["item__break--ipad"]} /> growth : It allows for
      the rapid integration of new features without{" "}
      <br className={styles["item__break--ipad"]} /> compromising stability,
      ensuring <br className={styles["item__break--desktop"]} /> consistency as
      the platform expands.
    </p>
  );
}

export function KasaConclusion() {
  return (
    <p className={styles["item__content--conclusion"]}>
      Kasa embodies my commitment to building solid, scalable applications{" "}
      <br className={styles["item__break--ipad"]} /> designed for clarity,
      consistency, and <br className={styles["item__break--desktop"]} /> long
      term trust.
    </p>
  );
}
