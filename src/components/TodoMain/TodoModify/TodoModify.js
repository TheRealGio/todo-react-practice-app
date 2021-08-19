import React, { useRef, useState } from "react";
import FormComponent from "../../FormComponent/FormComponent";
import classes from "./TodoModify.module.css";
import InputComponent from "../../UI/InputComponent/InputComponent";
import Button from "../../UI/Button/Button";
import { addTodo, getAllTodos, updateTodo } from "../../../lib/api";
import { useHistory, useParams } from "react-router-dom";
const TodoModify = (props) => {
  const history = useHistory();
  const titleInput = useRef();
  const descriptionInput = useRef();
  const [Update, setUpdate] = useState(props.isUpdate);
  const params = useParams();
  const submitHandler = (event) => {
    if (!Update) {
      event.preventDefault();
      const dataObj = {
        title: titleInput.current.value,
        description: descriptionInput.current.value,
        isCompleted: false,
      };
      setUpdate(false);
      addTodo(dataObj).then(getAllTodos()).then(history.push("/home/listTodo"));
    } else {
      event.preventDefault();
      const title = titleInput.current.value;
      const description = descriptionInput.current.value;
      setUpdate(true);
      updateTodo(params.todoId, title, description).then(
        getAllTodos().then(history.push("/home/listTodo"))
      );
    }
  };

  return (
    <main>
      <FormComponent
        headerText={props.isUpdate ? "Update TODO" : "Add TODOs"}
        onSubmit={submitHandler}
      >
        <InputComponent
          type="text"
          id={props.isUpdate ? "update-todo-title" : "add-todo-title"}
          placeholder={props.isUpdate ? props.titlePlaceholder : "Do Laundary"}
          inputRef={titleInput}
        >
          Title
        </InputComponent>
        <InputComponent
          type="text"
          id={
            props.isUpdate ? "update-todo-description" : "add-todo-description"
          }
          placeholder={
            props.isUpdate ? props.descriptionPlaceholder : "Wash Dem Clothes"
          }
          inputRef={descriptionInput}
        >
          Description
        </InputComponent>
        <Button
          type="submit"
          id={props.isUpdate ? "update-button" : "add-button"}
          addClass={classes["margin-todo-btn"]}
        >
          {props.isUpdate ? "Update" : "Add"}
        </Button>
      </FormComponent>
    </main>
  );
};

export default TodoModify;
