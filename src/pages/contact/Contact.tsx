import Form from "../../components/UI/form/Form";
import style from "./Contact.module.scss";

function Contact() {
  return (
    <>
      <main className={style["contactLayout"]}>
        <div className={style["contactLayout__bg"]}> </div>
        <div className={style["contactLayout__form"]}>
          <Form />
        </div>
      </main>
    </>
  );
}

export default Contact;
