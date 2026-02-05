import NavBar from "../../components/layout/navBar/NavBar";
import Button from "../../components/UI/button/Button";
import Project from "../../components/UI/project/Project";
import style from "./Home.module.scss";
import { projects } from "../../assets/data/projects";
import { expertises } from "../../assets/data/expertises";
import Card from "../../components/UI/card/Card";
function Home() {
  return (
    <>
      <header className={style["landing"]}>
        <NavBar />
        <section className={style["heroBanner"]}>
          <h1 className={style["heroBanner__title"]}>
            NEAL {""}
            <br className={style["heroBanner__title--break"]} />
            MULLER
          </h1>
          <p className={style["heroBanner__subtitle"]}>
            Front-end developer <br />
            crafting ideas to {""}
            <br className={style["heroBanner__subtitle--break"]} />
            living product
            <br className={style["heroBanner__subtitle--break"]} />
          </p>
        </section>
        <Button />
      </header>
      <main>
        <section className={style["projectSection"]}>
          <h2 className={style["projectSection__title"]}>Recent project</h2>
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </section>
        <section className={style["expertiseSection"]}>
          <h2 className={style["expertiseSection__title"]}>Expertise</h2>
          {expertises.map((expertise) => (
            <Card key={expertise.id} expertise={expertise} />
          ))}
        </section>
      </main>
    </>
  );
}

export default Home;
