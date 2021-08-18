import React, { Fragment, useState } from "react";
import { updateIsCompleted } from "../../../../lib/api";
import classes from "./ListElement.module.css";

const ListElement = (props) => {
  const [isCompleted, setIsCompleted] =useState(props.isCompleted);

  const selectorHandler = (event) => {
    const selection = event.target.value;

    if(selection === "completed"){
      console.log(props.id);
      updateIsCompleted(props.id,true).then(
        setIsCompleted(true)
       
      );
    } else if (selection === "incompleted"){
      updateIsCompleted(props.id,false).then(
        setIsCompleted(false)
       
      );
    }
  };
  return (
    <tr key={props.setKey}>
      <td className={isCompleted ? classes.completed : classes.incompleted}>{props.title}</td>
      <td className={isCompleted ? classes.completed : classes.incompleted}>
          {props.description}
      </td>
      <td>
        <select
          name={`todo-options-${props.id}`}
          id={`todo-options-${props.id}`}
          onChange = {selectorHandler}
        >
          <option value = "none" >Select</option>
          <option value="completed" className={classes.completed} >Completed</option>
          <option value="incompleted"  className={classes.incompleted}>Incompleted</option>
          <option value="delete">Delete</option>
          
        </select>
      </td>
    </tr>
  );
};

export default ListElement;
