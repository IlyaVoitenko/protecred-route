import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onFormSubmit = (data) => console.log(data);
  const onErrors = (errors) => console.error(errors);
  return (
    <div>
      <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
        <label htmlFor="email">
          <input
            {...register("email", {
              required: "email is required",
              pattern: /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/,
            })}
            name="email"
          />
          {errors?.email && errors.email.message}
        </label>
        <label htmlFor="password">
          <input
            {...register("password", { required: "password is required" })}
            name="password"
          />
          {errors?.password && errors.password.message}
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
