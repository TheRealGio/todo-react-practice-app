import React, { Fragment, useRef, useState } from "react";
import classes from "./AuthForm.module.css";
import Button from "../UI/Button/Button";
import InputComponent from "../UI/InputComponent/InputComponent";
import FormComponent from "../FormComponent/FormComponent";
import { useHistory } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const history = useHistory();

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //validation here, can be done

    if (isLogin) {
      
    } else {
      const nameInputValue = nameInputRef.current.value;
      const enteredConfirmPassword = confirmPasswordInputRef.current.value;
      if (enteredPassword === enteredConfirmPassword) {
        fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=***REMOVED***",
          {
            method: "POST",
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        ).then((res) => {
          if (res.ok) {
            history.push("/home");
          } else {
            res.json().then((data) => {
              console.log(data);
              alert(`Error Code : ${data.error.code} ${data.error.message}`); //can be a modal done for time constraints / not really important right now
            });
          }
        });
      } else {
        alert("Password Fields Don't match!");
      }
    }
  };

  return (
    <FormComponent
      headerText={isLogin ? "Login" : "Sign Up"}
      onSubmit={SubmitHandler}
    >
      {!isLogin && (
        <InputComponent
          type="text"
          id="name"
          placeholder="John Smith"
          inputRef={nameInputRef}
          required
        >
          Your Name
        </InputComponent>
      )}
      <InputComponent
        type="email"
        id="email"
        placeholder="john.smith@email.com"
        inputRef={emailInputRef}
        required
      >
        Your Email
      </InputComponent>
      <InputComponent
        type="password"
        id="password"
        inputRef={passwordInputRef}
        required
      >
        Password
      </InputComponent>
      {!isLogin && (
        <InputComponent
          type="password"
          id="password-confirm"
          inputRef={confirmPasswordInputRef}
          required
        >
          Confirm Password
        </InputComponent>
      )}
      <p>Forgot Password?</p>
      <Button type="submit" className={classes["btn-transition"]}>
        {isLogin ? "Login" : "Sign Up"}
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
