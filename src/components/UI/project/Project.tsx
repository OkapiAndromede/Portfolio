import { useRef, useState } from "react";
import type { Project as ProjectType } from "../../../assets/data/projects";
import styles from "./Project.module.scss";
import { projectTextMap } from "./projectTextMap";
import { ShowButton } from "../button/Button";

type Props = {
  project: ProjectType;
};

function Project({ project }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isActive, setIsActive] = useState(false);

  const Introduction = projectTextMap[project.id]?.introduction;
  const Core = projectTextMap[project.id]?.core;
  const Conclusion = projectTextMap[project.id]?.conclusion;

  //Gestion de la lecture
  const handlePlay = () => {
    videoRef.current?.play();
  };
  const handlePause = () => {
    videoRef.current?.pause();
  };

  //Logique spécifique au clic
  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      }
      if (videoRef.current.played) {
        videoRef.current.pause();
      }
    }
  };
  //Fonction pour gérer l'affichage du texte
  const showTxt = () => {
    setIsActive((prev) => !prev);
  };

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
          <div className={styles["item__media"]}>
            <video
              ref={videoRef}
              className={styles["item__media--video"]}
              src={project.video}
              muted
              loop
              playsInline
              preload="auto"
              onMouseEnter={handlePlay} //Hover desktop
              onMouseLeave={handlePause} //Quitter desktop
              onClick={handleTogglePlay} // click mobile/Ipad
            />
            <div className={styles["item__media--link"]}>
              <a className={styles["link__txt"]} href="#">
                Visit {project.title} live{" "}
                <br className={styles["link__txt--break"]} /> website
              </a>
              <svg
                className={styles["link__txt--arrow"]}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
              >
                <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
              </svg>
            </div>
          </div>
          <div className={styles["item__content--button"]}>
            <span className={styles["dashBar"]}></span>
            <ShowButton isActive={isActive} onClick={showTxt} />
          </div>
          {Core && <Core />}
          {Conclusion && <Conclusion />}
        </div>
        <div className={styles["item__photo"]}>
          <img
            className={styles["item__photo--first"]}
            src={project.images.first}
            alt={`image du projet ${project.title}`}
          />
          <img
            className={styles["item__photo--second"]}
            src={project.images.second}
            alt={`image du projet ${project.title}`}
          />
        </div>
      </article>
    </>
  );
}

export default Project;
