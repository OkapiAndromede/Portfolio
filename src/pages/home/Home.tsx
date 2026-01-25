import NavBar from "../../components/layout/navBar/NavBar";
import Button from "../../components/UI/button/Button";
import style from "./Home.module.scss";

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
    </>
  );
}

export default Home;
