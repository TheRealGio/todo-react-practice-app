import React, { useContext, useRef, useState } from "react";
import classes from "./AuthForm.module.css";
import Button from "../UI/Button/Button";
import InputComponent from "../UI/InputComponent/InputComponent";
import FormComponent from "../FormComponent/FormComponent";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const history = useHistory();
  const authCtx = useContext(AuthContext);

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
    let nameInputValue = null;
    let enteredConfirmPassword = enteredPassword;
    //validation here, can be done
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=***REMOVED***";
    } else {
      nameInputValue = nameInputRef.current.value;
      enteredConfirmPassword = confirmPasswordInputRef.current.value;
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=***REMOVED***";
    }

    if (enteredPassword === enteredConfirmPassword) {
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res, data) => {
          if (res.ok) {
            history.push("/home");
            return res.json();
          } else {
            let errorMessage = `Error Code : ${data.error.code} ${data.error.message}`;
            throw new Error(errorMessage);
          }
        })
        .then((data) => {
          const expirationTime = new Date(
            new Date().getTime() + +data.expiresIn * 1000
          );
          authCtx.login(data.idToken, expirationTime.toISOString());
          history.replace("/home");
        })
        .catch((err) => {
          console.log(err.message);
          alert(err.message);
        });
    } else {
      alert("Password Fields Don't match!");
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
