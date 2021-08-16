import React from 'react';
import classes from './TodoSideBar.module.css';
import Button from '../../UI/Button/Button';
import { useHistory } from 'react-router-dom';

const TodoSideBar = () => {
    const history = useHistory();
    const AddHandler = () => {
        history.push("/home/addTodo");
    };

    const ListHandler = () => {
        history.push("/home/listTodo");
    };

    return (
        <aside >
            <section>
             <Button type ="button" id="add-btn"   addClass = {classes['btn-margin'] } onClick = {AddHandler}>Add TODO</Button>
             <Button type ="button" id="list-btn"  addClass = {classes['btn-margin']} onClick = {ListHandler}>List TODOs</Button>   
            </section>
        </aside>
    );
};

export default TodoSideBar;