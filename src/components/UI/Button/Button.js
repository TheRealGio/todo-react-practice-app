import React from "react";
import "./Button.module.css";

const Button = (props) => {
  const fullStyle = "btn-transition " + props.addClass;

  return (
    <button
      onClick={props.onClick}
      type={props.type}
      id={props.id}
      className={`${fullStyle}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
