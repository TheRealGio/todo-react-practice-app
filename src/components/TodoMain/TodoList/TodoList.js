import React, { useCallback, useEffect, useState } from "react";
import classes from "./TodoList.module.css";
import ListElement from "../ListElement/ListElement";
import { getAllTodos, removeTodo, updateIsCompleted } from "../../../lib/api";
import LoadingSpinner from "../../UI/LoadingSpinner/LoadingSpinner";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const callTodo = useCallback(() => {

      getAllTodos().then((data) => {
        setTodoList(data);
        setIsLoading(false);

      });
  },[]);

  useEffect(() => {
    callTodo();
  }, [callTodo]);

  const deleteHandler = async (id) => {
    await removeTodo(id);
    await callTodo();
  };

  const compIncompHandler = async (id, isComplete) => {
    await updateIsCompleted(id, isComplete);
    await callTodo();
  };


  return (
    <main className={classes["table-align"]}>
      <h1>TODO List</h1>
      <p>Completed: {todoList.filter((el) => el.isCompleted === true).length}</p>
      <p>Incompleted: {todoList.filter((el) => el.isCompleted === false).length}</p>
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

          {todoList.length !== 0 &&
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
                  onCompIncomp={compIncompHandler}
                />
              );
            })}
        </tbody>
      </table>
    </main>
  );
};

export default TodoList;
