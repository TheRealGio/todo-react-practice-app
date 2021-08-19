import React from "react";
import NavBar from "../components/TodoMain/TodoNavBar/TodoNavBar";
import SideBar from "../components/TodoMain/TodoSideBar/TodoSideBar";
import TodoModify from "../components/TodoMain/TodoModify/TodoModify";
import TodoList from "../components/TodoMain/TodoList/TodoList";
import { Route, Switch } from "react-router-dom";

const HomePage = () => {
  return (
    <React.Fragment>
      <NavBar />
      <SideBar />
      <Switch>
        <Route path="/home/addtodo">
          <TodoModify isUpdate={false} />
        </Route>
        <Route path="/home/listtodo">
          <TodoList />
        </Route>
        <Route path="/home/updatetodo/:todoId">
          <TodoModify isUpdate={true} />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default HomePage;
