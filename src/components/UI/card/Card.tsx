import type { Expertise as ExpertiseType } from "../../../assets/data/expertises";
import styles from "./Card.module.scss";

type Props = {
  expertise: ExpertiseType;
};

function Card({ expertise }: Props) {
  return (
    <>
      <article className={styles["card"]}>
        <div className={styles[expertise.class]}>
          <img
            className={styles["card__logo"]}
            src={expertise.icon}
            alt={`${expertise.title} logo`}
          />
        </div>
        <div className={styles["card__content"]}>
          <h3 className={styles["card__title"]}>{expertise.title}</h3>
          <div className={styles["card__txt"]}>
            <p className={styles["card__txt--intro"]}>
              {expertise.introduction}
            </p>
            <p className={styles["card__txt--core"]}>{expertise.core}</p>
          </div>
        </div>
      </article>
    </>
  );
}

export default Card;
