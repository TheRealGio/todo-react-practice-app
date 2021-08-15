import React from "react";
import classes from "./InputComponent.module.css";

const InputComponent = (props) => {
    return (
        <React.Fragment>
        <label htmlFor={props.id}>{props.children}</label>
        <input
          type={props.type}
          id= {props.id}
          placeholder= {props.placeholder}
          ></input>
          </React.Fragment>
    )
};

export default InputComponent;