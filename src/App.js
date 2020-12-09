import React,{useState} from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route,NavLink } from "react-router-dom";

import Register from './components/Register';
import Login from './components/Login';
import Restaurents from './components/Restaurents';

const App = () => {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/otp-verify" component={Login} />  
        <Route exact path="/rest-listing" component={Restaurents} /> 
        <Route path="/" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
