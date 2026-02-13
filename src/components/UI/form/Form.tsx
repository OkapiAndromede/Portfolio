import { useForm } from "react-hook-form";
import style from "./Form.module.scss";
import { SubmitButton } from "../button/Button";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form className={style["formLayout"]}>
      <div className={style["field"]}>
        <div className={style["field__name"]}>
          <input
            type="text"
            id="firstName"
            placeholder="John"
            {...register("firstName", {
              required: "You must provide a firstname",
              pattern: {
                value: /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[-' ][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/,
                message: "First name is invalid",
              },
            })}
          />
          <input
            type="text"
            id="lastName"
            placeholder="Doe"
            {...register("lastName", {
              required: "You must provide a lastname",
              pattern: {
                value: /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[-' ][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/,
                message: "Last name is invalid",
              },
            })}
          />
        </div>
        <input
          type="text"
          id="email"
          className={style["field__email"]}
          placeholder="john.doe@example.com"
          {...register("email", {
            required: "You must provide a email",
            pattern: {
              value: /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
              message: "Email is invalid ",
            },
          })}
        />
        <textarea
          id="message"
          className={style["field__message"]}
          placeholder="Your message"
          {...register("message", {
            required: "You must povide a message",
            pattern: {
              value: /^(?!\s*$)[^<>]{10,}$/,
              message: "Please write a classical message",
            },
          })}
        />
      </div>
      <SubmitButton />
    </form>
  );
}
export default Form;
