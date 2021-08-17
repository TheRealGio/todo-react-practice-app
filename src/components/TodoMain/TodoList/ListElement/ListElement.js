import React, { Fragment } from "react";
import classes from "./ListElement.module.css";

const ListElement = (props) => {
  return (
    <tr>
      <td>{props.title}</td>
      <td>
          {props.description}
      </td>
      <td>
        <select
          name={`todo-options-${props.id}`}
          id={`todo-options-${props.id}`}
        >
          <option value="completed">Completed</option>
          <option value="uncompleted" defaultValue>Uncompleted</option>
          <option value="delete">Delete</option>
        </select>
      </td>
    </tr>
  );
};

export default ListElement;
