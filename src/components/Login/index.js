import React from "react";
import { useForm } from "react-hook-form";
import style from "./style.module.css";
import { getUserByEmail } from "../../api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsAuth, setUserData } from "../../redux/slices/user";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = async (data) => {
    const { email } = data;
    const user = await getUserByEmail(email);
    if (!user) return;
    dispatch(setIsAuth());
    dispatch(setUserData(user));
    navigate("/home");
  };
  const onErrors = (errors) => console.error(errors);

  return (
    <div className={style.container}>
      <form
        onSubmit={handleSubmit(onFormSubmit, onErrors)}
        className={style.containerForm}
      >
        <label htmlFor="email" className={style.lable}>
          Email
          <input
            {...register("email", {
              required: "email is required",
              pattern: /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/,
            })}
            name="email"
          />
        </label>
        {errors?.email && <span>{errors.email.message}</span>}

        <label htmlFor="password" className={style.lable}>
          password
          <input
            {...register("password", { required: "password is required" })}
            name="password"
          />
        </label>
        {errors?.password && <span>{errors.password.message}</span>}

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
