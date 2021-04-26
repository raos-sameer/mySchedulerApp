import React from "react";
import "./App.css";
import ScheduleMeetingController from "./containers/ScheduleMeetingController";
import HomePageController from "./containers/HomePageController";
import LoginController from "./containers/LoginController";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./containers/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/schedule">
          <ScheduleMeetingController />
        </Route>
        <Route path="/dashoard">
          <Dashboard />
        </Route>
        <Route path="/home">
          <HomePageController />
        </Route>
        <Route exact path="/">
          <LoginController />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
