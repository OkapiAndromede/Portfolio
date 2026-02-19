import { NavLink } from "react-router-dom";
import { HomeButton } from "../../components/UI/button/Button";
import Form from "../../components/UI/form/Form";
import style from "./Contact.module.scss";

function Contact() {
  return (
    <>
      <main className={style["contactLayout"]}>
        <div className={style["contactLayout__bg"]}>
          <NavLink to={"/"}>
            <HomeButton className={style["contactLayout__bg--button"]} />
          </NavLink>
        </div>
        <div className={style["contactLayout__form"]}>
          <Form />
        </div>
      </main>
    </>
  );
}

export default Contact;
