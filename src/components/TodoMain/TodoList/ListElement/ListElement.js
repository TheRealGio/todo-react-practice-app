import React, { Fragment } from "react";
import classes from "./ListElement.module.css";

const ListElement = (props) => {
  return (
    <tr key={props.keykey}>
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
          <option value="uncompleted" selected >Uncompleted</option>
          <option value="delete">Delete</option>
        </select>
      </td>
    </tr>
  );
};

export default ListElement;
