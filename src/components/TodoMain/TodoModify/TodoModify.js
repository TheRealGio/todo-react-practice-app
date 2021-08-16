import React, { Fragment } from "react";
import FormComponent from "../../FormComponent/FormComponent";
import classes from './TodoModify.module.css';
import InputComponent from "../../UI/InputComponent/InputComponent";
import Button from "../../UI/Button/Button";
const TodoModify = (props) => {
    return (
        <main>
            <FormComponent headerText = {props.isUpdate ? "Update TODO" : "Add TODOs"}>
                <InputComponent type="text" id={props.isUpdate ? "update-todo-title" : "add-todo-title"} placeholder = {props.isUpdate ? props.titlePlaceholder : "Do Laundary"}>Title</InputComponent>
                <InputComponent type="text" id={props.isUpdate ? "update-todo-description" : "add-todo-description"} placeholder={props.isUpdate ? props.descriptionPlaceholder : "Wash Dem Clothes"}>Description</InputComponent>
                <Button type="button" id={props.isUpdate ? "update-button" : "add-button"} addClass = {classes['margin-todo-btn']}>{props.isUpdate ? "Update" : "Add"}</Button>
            </FormComponent>
            
        </main>
    )
};

export default TodoModify;