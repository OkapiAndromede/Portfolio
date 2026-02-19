import { useForm } from "react-hook-form";
import style from "./Form.module.scss";
import { SubmitButton } from "../button/Button";
import { toast } from "react-toastify";

function Form() {
  type ContactFormValues = {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  };
  const { register, handleSubmit } = useForm<ContactFormValues>();

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Error sending");
      toast.success("Message sent successfully");
    } catch (error) {
      toast.error("Failed to send your message");
    }
  };
  const onInvalid = (errors: any) => {
    if (errors.firstName) {
      toast.error(errors.firstName.message);
    }
    if (errors.lastName) {
      toast.error(errors.lastName.message);
    }
    if (errors.email) {
      toast.error(errors.email.message);
    }
    if (errors.message) {
      toast.error(errors.message.message);
    }
  };

  return (
    <form
      className={style["formLayout"]}
      onSubmit={handleSubmit(onSubmit, onInvalid)}
    >
      <div className={style["field"]}>
        <div className={style["field__name"]}>
          <div className={style["field__name--first"]}>
            <input
              type="text"
              id="firstName"
              placeholder="John"
              {...register("firstName", {
                required: "You must provide a first name",
                pattern: {
                  value: /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[-' ][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/,
                  message: "First name is invalid",
                },
              })}
            />
          </div>
          <div className={style["field__name--last"]}>
            <input
              type="text"
              id="lastName"
              placeholder="Doe"
              {...register("lastName", {
                required: "You must provide a last name",
                pattern: {
                  value: /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[-' ][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/,
                  message: "Last name is invalid",
                },
              })}
            />
          </div>
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
