import React, { useContext } from "react";

import classes from "./TodoNavBar.module.css";

import Button from "../../UI/Button/Button";
import { useHistory } from "react-router-dom";
import AuthContext from "../../../store/auth-context";

const TodoNavBar = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const LogoutHandler = () => {
    authCtx.logout();
    history.replace("/login/");
  };

  return (
    <nav className={classes.navBar}>
      <h1>TODO</h1>
      <Button onClick={LogoutHandler}>Logout</Button>
    </nav>
  );
};

export default TodoNavBar;
