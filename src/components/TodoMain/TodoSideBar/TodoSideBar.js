import React from 'react';
import classes from './TodoSideBar.module.css';
import Button from '../../UI/Button/Button';

const TodoSideBar = () => {
    return (
        <aside >
            <section>
             <Button type ="button" id="add-btn"   addClass = {classes['btn-margin']}>Add TODO</Button>
             <Button type ="button" id="list-btn"  addClass = {classes['btn-margin']}>List TODOs</Button>   
            </section>
        </aside>
    );
};

export default TodoSideBar;