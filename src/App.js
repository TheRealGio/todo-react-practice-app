import "./App.css";
import AuthPage from "./pages/AuthPage";
import { Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { useContext } from "react";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Switch>
      {authCtx.isLoggedIn && (
        <Route path="/home">
          <HomePage />
        </Route>
      )}
      {!authCtx.isLoggedIn && (
        <Route path="/login">
          <AuthPage />
        </Route>
      )}
      <Route path="*">
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
}

export default App;
