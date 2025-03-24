import { useEffect } from "react";
import styles from "./ContactForm.module.css";
import { useForm } from "react-hook-form";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

function ContactFrom() {
  const form = useForm<FormValues>();
  const { register, handleSubmit, formState, reset } = form;
  const { errors, isSubmitSuccessful } = formState;

  const onSubmit = (data: FormValues) => {
    alert("Form submitted succesfully")
    console.log(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h1>Contact Us</h1>
        <div className={`${styles.names}`}>
          <div>
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              id="name"
              {...register("firstName", {
                required: {
                  value: true,
                  message: "* required",
                },
              })}
            />
            <p className={`${styles.error}`}>{errors.firstName?.message}</p>
          </div>
          <div>
            <label htmlFor="LastName">Last name</label>
            <input
              type="text"
              id="name"
              {...register("lastName", {
                required: {
                  value: true,
                  message: "* required",
                },
              })}
            />
            <p className={`${styles.error}`}>{errors.lastName?.message}</p>
          </div>
        </div>
        <div className={`${styles.email}`}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: {
                value: true,
                message: "* required",
              },
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email format",
              },
            })}
          />
          <p className={`${styles.error}`}>{errors.email?.message}</p>
        </div>
        <div className={`${styles.textarea}`}>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              {...register("message", {
                required: {
                  value: true,
                  message: "* required",
                },
              })}
            ></textarea>
            <p className={`${styles.error}`}>{errors.message?.message}</p>
          </div>
        </div>

        <button>Submit</button>
      </form>
    </>
  );
}

export default ContactFrom;
