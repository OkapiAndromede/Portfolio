import type { Project as ProjectType } from "../../../assets/data/projects";
import styles from "./Project.module.scss";
import { projectTextMap } from "./projectTextMap";

type Props = {
  project: ProjectType;
};

function Project({ project }: Props) {
  const Introduction = projectTextMap[project.id]?.introduction;
  const Core = projectTextMap[project.id]?.core;
  const Conclusion = projectTextMap[project.id]?.conclusion;
  return (
    <>
      <article className={styles["item"]}>
        <h3 className={styles["item__title"]}>
          <span className={styles["item__title--number"]}>
            {project.number}
          </span>
          {project.title}
        </h3>
        <div className={styles["item__content"]}>
          {Introduction && <Introduction />}
          {Core && <Core />}
          {Conclusion && <Conclusion />}
        </div>
        <div className={styles["item__media"]}>
          {/* <video
            className={styles["item__media--video"]}
            src={project.video}
            muted
            playsInline
            preload="none"
            /> */}
          <img
            src={project.images.first.small}
            alt={`image du projet ${project.title}`}
          />
          <img
            src={project.images.second.small}
            alt={`image du projet ${project.title}`}
          />
        </div>
        <div className={styles["item__link"]}>
          <a className={styles["item__link--txt"]} href="#">
            Visit {project.title} live{" "}
            <br className={styles["item__link--break"]} /> website
          </a>
          <svg
            className={styles["item__link--arrow"]}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
          </svg>
        </div>
      </article>
    </>
  );
}

export default Project;
