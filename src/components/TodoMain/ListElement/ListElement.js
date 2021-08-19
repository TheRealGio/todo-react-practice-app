import React, { useState } from "react";
import { updateIsCompleted } from "../../../lib/api";
import classes from "./ListElement.module.css";
import { useHistory } from "react-router-dom";

const ListElement = (props) => {
  const history = useHistory();

  const [isCompleted, setIsCompleted] = useState(props.isCompleted);
  const update = () => {
    history.push(`/home/updatetodo/${props.id}`);
  };
  const selectorHandler = (event) => {
    const selection = event.target.value;

    if (selection === "completed") {
      console.log(props.id);
      updateIsCompleted(props.id, true).then(setIsCompleted(true));
    } else if (selection === "incompleted") {
      updateIsCompleted(props.id, false).then(setIsCompleted(false));
    } else if (selection === "delete") {
      props.onDelete(props.id);
    }
  };
  return (
    <tr key={props.setKey}>
      <td
        className={isCompleted ? classes.completed : classes.incompleted}
        onClick={update}
      >
        {props.title}
      </td>
      <td
        className={isCompleted ? classes.completed : classes.incompleted}
        onClick={update}
      >
        {props.description}
      </td>
      <td>
        <select
          name={`todo-options-${props.id}`}
          id={`todo-options-${props.id}`}
          onChange={selectorHandler}
        >
          <option value="none">Select</option>
          <option value="completed" className={classes.completed}>
            Completed
          </option>
          <option value="incompleted" className={classes.incompleted}>
            Incompleted
          </option>
          <option value="delete">Delete</option>
        </select>
      </td>
    </tr>
  );
};

export default ListElement;
