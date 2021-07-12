import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";

const App = () => {
  return (
    <main className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Counter} />
          <Route exact path="/counter" component={Counter} />
        </Switch>
      </Router>
    </main>
  );
};

export default App;
