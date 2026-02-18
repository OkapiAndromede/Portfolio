import NavBar from "../../components/layout/navBar/NavBar";
import Project from "../../components/UI/project/Project";
import style from "./Home.module.scss";
import { projects } from "../../assets/data/projects";
import { expertises } from "../../assets/data/expertises";
import Card from "../../components/UI/card/Card";
import Footer from "../../components/layout/footer/Footer";
import { Button } from "../../components/UI/button/Button";
import { NavLink } from "react-router-dom";
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
        <NavLink to={"/contact"}>
          <Button />
        </NavLink>
      </header>
      <main>
        <section id="projectSection" className={style["projectSection"]}>
          <h2 className={style["projectSection__title"]}>Recent project</h2>
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </section>
        <section id="expertiseSection" className={style["expertiseSection"]}>
          <h2 className={style["expertiseSection__title"]}>Expertise</h2>
          <div className={style["expertiseSection__core"]}>
            {expertises.map((expertise) => (
              <Card key={expertise.id} expertise={expertise} />
            ))}
          </div>
        </section>
        <section id="aboutSection" className={style["aboutSection"]}>
          <h2 className={style["aboutSection__title"]}>About me</h2>
          <div className={style["aboutSection__core"]}>
            <div className={style["aboutSection__txt"]}>
              <p className={style["aboutSection__txt--intro"]}>
                I believe that building a project starts with making thoughtful
                choices <br className={style["aboutSection__txt--ipadBreak"]} />
                about the{" "}
                <br className={style["aboutSection__txt--desktopBreak"]} />{" "}
                tools used to turn an idea into a concrete solution.
              </p>
              <p className={style["aboutSection__txt--core"]}>
                I focus on building interfaces that are clean, structured and
                designed to{" "}
                <br className={style["aboutSection__txt--ipadBreak"]} />
                last.{" "}
                <br className={style["aboutSection__txt--desktopBreak"]} /> From
                HTML and CSS foundations to scalable React components enhanced
                with TypeScript,{" "}
                <br className={style["aboutSection__txt--desktopBreak"]} /> my
                work is driven by clarity, consistency{" "}
                <br className={style["aboutSection__txt--ipadBreak"]} />
                and long-term reliability.
              </p>
              <p className={style["aboutSection__txt--conclusion"]}>
                Each technical choice is made to serve both the user experience
                and the <br className={style["aboutSection__txt--ipadBreak"]} />
                product’s{" "}
                <br className={style["aboutSection__txt--desktopBreak"]} />{" "}
                ability to evolve.
              </p>
            </div>
            <NavLink to={"/contact"}>
              <Button />
            </NavLink>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
