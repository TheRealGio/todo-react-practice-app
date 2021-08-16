import React, { Fragment } from "react";
import NavBar from "../components/TodoMain/TodoNavBar/TodoNavBar";
import SideBar from "../components/TodoMain/TodoSideBar/TodoSideBar";
import TodoModify from "../components/TodoMain/TodoModify/TodoModify";
import TodoList from "../components/TodoMain/TodoList/TodoList";

const HomePage = () => {

    return (
        <React.Fragment>
            <NavBar/>
            <SideBar/>
            {/* <TodoModify/> */}
            <TodoList/>
        </React.Fragment>
    )
};

export default HomePage;