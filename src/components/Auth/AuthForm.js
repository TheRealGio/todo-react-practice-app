import React, { Fragment, useState } from "react";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const[isLogin,setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };


  return (
    <section className={classes.auth}>
      <form>
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        {!isLogin && <label htmlFor="name">Your Name</label>}
        {!isLogin && <input
          type="text"
          id="name"
          placeholder="John Smith"
          required
          ></input>}
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          placeholder="john.smith@email.com"
          required
          ></input>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" required></input>
        {!isLogin && <label htmlFor="password-confirm">Confirm Password</label>}
        {!isLogin && <input type="password" id="password-confirm" required></input>}
        <p>Forgot Password?</p>
        <button type="button" className={classes["btn-transition"]}>
          Login
        </button>
        <h5>OR</h5>
        <button type="button" className={classes["btn-transition"] } onClick = {switchAuthModeHandler}>
          {isLogin ? 'New User? Register!' : 'Go Back'}
        </button>
      </form>
    </section>
  );
};

export default AuthForm;
