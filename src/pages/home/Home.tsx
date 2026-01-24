import NavBar from "../../components/layout/navBar/NavBar";
import style from "./Home.module.scss";

function Home() {
  return (
    <>
      <header className={style["landing"]}>
        <NavBar />
        <section className={style["heroBanner"]}>
          <h1 className={style["heroBanner__title"]}>
            NEAL
            <br />
            MULLER
          </h1>
          <p className={style["heroBanner__subtitle"]}>
            Front-end developer <br />
            crafting ideas to <br />
            living product <br />
          </p>
        </section>
      </header>
    </>
  );
}

export default Home;
