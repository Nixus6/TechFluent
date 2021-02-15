import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Login } from "./views/login/Login";
import Main from "./views/main/main";
import { Register } from "./views/Register/Register";
import { Properties } from "./views/properties/properties";
import './App.css';


function App() {
  return (
    <Router>
      <Switch>

        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/properties" component={Properties}></Route>
        <Route path="/" component={Main}></Route>

      </Switch>
    </Router>
  );
}

export default App;
