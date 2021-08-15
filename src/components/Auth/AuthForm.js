import React, { Fragment, useState } from "react";
import classes from "./AuthForm.module.css";
import Button from "../UI/Button/Button";
import InputComponent from "../UI/InputComponent/InputComponent";
import FormComponent from "../FormComponent/FormComponent";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <FormComponent headerText={isLogin ? "Login" : "Sign Up"}>
      {!isLogin && (
        <InputComponent type="text" id="name" placeholder="John Smith" required>
          Your Name
        </InputComponent>
      )}
      <InputComponent
        type="email"
        id="email"
        placeholder="john.smith@email.com"
        required
      >
        Your Email
      </InputComponent>
      <InputComponent type="password" id="password" required>
        Password
      </InputComponent>
      {!isLogin && (
        <InputComponent type="password" id="password-confirm" required>
          Confirm Password
        </InputComponent>
      )}
      <p>Forgot Password?</p>
      <Button type="button" className={classes["btn-transition"]}>
        Login
      </Button>
      <h5>OR</h5>
      <Button
        type="button"
        className={classes["btn-transition"]}
        onClick={switchAuthModeHandler}
      >
        {isLogin ? "New User? Register!" : "Go Back"}
      </Button>
    </FormComponent>
  );
};

export default AuthForm;
