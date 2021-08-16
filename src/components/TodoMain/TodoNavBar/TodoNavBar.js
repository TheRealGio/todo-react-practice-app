import React from "react";

import classes from "./TodoNavBar.module.css";

import Button from "../../UI/Button/Button";
import { useHistory } from "react-router-dom";

const TodoNavBar = () => {
  const history = useHistory();

  const LogoutHandler = () => {
    history.push("/login/");
  };

  return (
    <nav className={classes.navBar}>
      <h1>TODO</h1>
      <Button onClick = {LogoutHandler}>Logout</Button>
    </nav>
  );
};

export default TodoNavBar;
