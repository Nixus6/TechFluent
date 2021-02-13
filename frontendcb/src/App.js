import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import {Login} from "./views/login/Login";
import {Register} from "./views/Register/Register";
import './App.css';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="container p-4">
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
