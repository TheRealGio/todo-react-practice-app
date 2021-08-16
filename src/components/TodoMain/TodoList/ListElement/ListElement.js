import React, { Fragment } from "react";
import classes from "./ListElement.module.css";

const ListElement = (props) => {
  return (
    <tr>
      <td>Test Title</td>
      <td>
        Test Description for this component does it really expand as such or is
        it just a dream?
      </td>
      <td>
        <select
          name={`todo-options-${props.id}`}
          id={`todo-options-${props.id}`}
        >
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
          <option value="delete">Delete</option>
        </select>
      </td>
    </tr>
  );
};

export default ListElement;
