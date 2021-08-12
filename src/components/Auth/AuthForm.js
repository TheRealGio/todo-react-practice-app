import React, { Fragment } from 'react';
import classes from './AuthForm.module.css';

const AuthForm = () => {

    return (
        <section className = {classes.auth} >
            
            <form>
            <h1>Login</h1>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="john.smith@email.com" required ></input>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required></input>
            <p className={classes["color-2"]}>Forgot Password?</p>
            <button type="button" className={classes["color-2"]}>Login</button>
            </form>
        </section>
    );
};


export default AuthForm;