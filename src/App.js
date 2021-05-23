import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Navbar";
import HomePage from "./components/HomePage";
import Login from "./components/LoginForm";
import LogFood from "./components/FoodForm";
import SignUp from "./components/SignupForm";

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signin" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/logfood" component={LogFood} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
