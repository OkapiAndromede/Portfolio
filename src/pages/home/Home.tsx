import NavBar from "../../components/layout/navBar/NavBar";
import style from "./Home.module.scss";

function Home() {
  return (
    <>
      <header className={style["landing"]}>
        <NavBar />
      </header>
    </>
  );
}

export default Home;
