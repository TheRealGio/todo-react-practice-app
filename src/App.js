import "./App.css";
import AuthPage from "./pages/AuthPage";
import { Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <Switch>
     
      <Route path="/home" >
        <HomePage />
      </Route>
      <Route path="/login" >
        <AuthPage />
      </Route>
      <Route path="*">
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
}

export default App;
