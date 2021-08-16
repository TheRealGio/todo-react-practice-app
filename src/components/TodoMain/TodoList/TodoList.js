import React from "react";
import classes from './TodoList.module.css';
import ListElement from "./ListElement/ListElement";

const TodoList = () => {
  return (
    <main className={classes["table-align"]}>
      <h1>TODO List</h1>
      <table>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Options</th>
        </tr>
        <ListElement/>
      </table>
    </main>
  );
};

export default TodoList;
