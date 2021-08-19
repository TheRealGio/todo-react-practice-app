import React, { Fragment, useEffect, useRef } from "react";
import FormComponent from "../../FormComponent/FormComponent";
import classes from "./TodoModify.module.css";
import InputComponent from "../../UI/InputComponent/InputComponent";
import Button from "../../UI/Button/Button";
import { addTodo, getAllTodos } from "../../../lib/api";
import { useHistory } from "react-router-dom";
const TodoModify = (props) => {
  const history =  useHistory();
  const titleInput = useRef();
  const descriptionInput = useRef();

  const addingTodo = (event) => {
      event.preventDefault();
      const dataObj = {
        title: titleInput.current.value,
        description: descriptionInput.current.value,
        isCompleted: false,
      };
      
      addTodo(dataObj).then(
        getAllTodos()
      ).then(
        history.push("/home/listTodo")
      );

      
  };




  return (
    <main>
      <FormComponent headerText={props.isUpdate ? "Update TODO" : "Add TODOs"} onSubmit={addingTodo}>
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
