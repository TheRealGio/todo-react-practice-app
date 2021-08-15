import React from 'react';
import classes from './Button.module.css';


const Button = (props) => {
   const  fullStyle = 'btn-transition ' + props.addClass;

    return (
        <button onClick = {props.onClick} type = {props.type} id = {props.id}  className={classes[fullStyle], props.addClass} >{props.children}</button>
    )
};

export default Button;