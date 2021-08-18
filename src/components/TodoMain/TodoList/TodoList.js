import React, { useEffect, useState } from "react";
import classes from "./TodoList.module.css";
import ListElement from "./ListElement/ListElement";
import { getAllTodos, removeTodo } from "../../../lib/api";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    getAllTodos().then((data) => {
      setTodoList(data);
      console.log(data);
    });
  }, []);

  const deleteHandler = (id) => {
    removeTodo(id);
    getAllTodos();
  };
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
          {todoList.length === 0 && (
            <tr>
              <td className={classes["empty-todo"]} colSpan="3">
                There is nothing to Display!
              </td>
            </tr>
          )}

          {todoList.length != 0 &&
            todoList.map((todo) => {
              return (
                <ListElement
                  title={todo.title}
                  description={todo.description}
                  isCompleted={todo.isCompleted}
                  setKey={todo.id}
                  id={todo}
                  onDelete={deleteHandler}
                />
              );
            })}
        </tbody>
      </table>
    </main>
  );
};

export default TodoList;
