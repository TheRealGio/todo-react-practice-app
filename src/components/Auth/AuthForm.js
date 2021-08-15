import React, { Fragment } from "react";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  return (
    <section className={classes.auth}>
      <form>
        <h1>Login</h1>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          placeholder="john.smith@email.com"
          required
        ></input>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" required></input>
        <p>Forgot Password?</p>
        <button type="button" className={classes["btn-transition"]}>
          Login
        </button>
        <h5>OR</h5>
        <button type="button" className={classes["btn-transition"]}>
          New User? Register!
        </button>
      </form>
    </section>
  );
};

export default AuthForm;
