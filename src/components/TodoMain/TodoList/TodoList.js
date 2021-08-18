import React, { useEffect } from "react";
import classes from './TodoList.module.css';
import ListElement from "./ListElement/ListElement";
import {getAllTodos} from "../../../lib/api";




let todoList = [];

const TodoList = () => {
  
  useEffect(() => {
    todoList = getAllTodos();
  }, [getAllTodos,todoList]) 
  return (
    <main className={classes["table-align"]}>
      <h1>TODO List</h1>
      <table>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Options</th>
        </tr>
        {todoList.length === 0 && <tr><td className={classes["empty-todo"]} colSpan="3">There is nothing to Display!</td></tr>}
        {todoList.length !=0 &&<ListElement/>}
      </table>
    </main>
  );
};

export default TodoList;
