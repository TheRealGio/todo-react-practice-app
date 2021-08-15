import React, { Fragment } from "react";
import FormComponent from "../../FormComponent/FormComponent";
import classes from './TodoAdd.module.css';
import InputComponent from "../../UI/InputComponent/InputComponent";
import Button from "../../UI/Button/Button";
const TodoAdd = () => {

    return (
        <main>
            <FormComponent headerText = "Add TODOs">
                <InputComponent type="text" id="todo-add" placeholder="Do Laundry">Title</InputComponent>
                <InputComponent type="text" id="todo-add-description" placeholder="Wash Dem Clothes">Description</InputComponent>
                <Button type="button" id="add-todo-btn" addClass = {classes['add-todo-btn']}>Add</Button>
            </FormComponent>
            
        </main>
    )
};

export default TodoAdd;