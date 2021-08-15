import React from "react";

import classes from "./TodoNavBar.module.css";

import Button from "../../UI/Button/Button";

const TodoNavBar = () => {
  return (
    <nav className={classes.navBar}>
      <h1>TODO</h1>
      <Button >Logout</Button>
    </nav>
  );
};

export default TodoNavBar;
