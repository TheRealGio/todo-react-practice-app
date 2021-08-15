import React, { Fragment } from "react";
import NavBar from "../components/TodoMain/TodoNavBar/TodoNavBar";
import SideBar from "../components/TodoMain/TodoSideBar/TodoSideBar";
import TodoAdd from "../components/TodoMain/TodoAdd/TodoAdd"

const HomePage = () => {

    return (
        <React.Fragment>
            <NavBar/>
            <SideBar/>
            <TodoAdd/>
        </React.Fragment>
    )
};

export default HomePage;