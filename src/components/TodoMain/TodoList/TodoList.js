import React, { useEffect, useState } from "react";
import classes from './TodoList.module.css';
import ListElement from "./ListElement/ListElement";
import {getAllTodos} from "../../../lib/api";




const TodoList = () => {
  const [todoList, setTodoList] =useState([]);
  useEffect(() => {
     getAllTodos().then(
      (data)=>{
        setTodoList(data);
        console.log(data);
      }
    );
  }, []) 
  return (
    <main className={classes["table-align"]}>
      <h1>TODO List</h1>
      <table>
        <tbody>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Options</th>
        </tr>
        {todoList.length === 0 && <tr><td className={classes["empty-todo"]} colSpan="3">There is nothing to Display!</td></tr>}

        {todoList.length !=0 && todoList.map((todo) => { console.log(todo.id); return <ListElement title={todo.title} description= {todo.description} isCompleted = {!!todoList.isCompleted} key={todo.id}/>})}
        </tbody>
      </table>
    </main>
  );
};

export default TodoList;
