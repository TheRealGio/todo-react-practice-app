import React, { Fragment } from "react";
import NavBar from "../components/TodoMain/TodoNavBar/TodoNavBar";
import SideBar from "../components/TodoMain/TodoSideBar/TodoSideBar";

const HomePage = () => {

    return (
        <React.Fragment>
            <NavBar/>
            <SideBar/>

        </React.Fragment>
    )
};

export default HomePage;