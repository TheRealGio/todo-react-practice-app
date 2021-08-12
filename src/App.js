import './App.css';
import AuthPage from './pages/AuthPage';
import {Route} from 'react-router-dom';


function App() {
  return (
    <Route path="/">
      <AuthPage/>
      </Route>
  );
}

export default App;
