import React, { useEffect, useState } from "react";
import classes from "./TodoList.module.css";
import ListElement from "../ListElement/ListElement";
import { getAllTodos, removeTodo } from "../../../lib/api";
import LoadingSpinner from "../../UI/LoadingSpinner/LoadingSpinner";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getAllTodos().then((data) => {
      setTodoList(data);
      setIsLoading(false);

      console.log(data);
    });
  }, []);

  const deleteHandler = (id) => {

    removeTodo(id);

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
          {isLoading && todoList.length === 0 && (
            <tr>
              <td className={classes["empty-todo"]} colSpan="3">
                <LoadingSpinner />
              </td>
            </tr>
          )}
          {!isLoading && todoList.length === 0 && (
            <tr>
              <td className={classes["empty-todo"]} colSpan="3">
                No Todos were found Create some in the Add Tab!
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
                  key={todo.id}
                  setKey={todo.id}
                  id={todo.id}
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
