import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./features/home/Home";
import Counter from "./features/counter/Counter";
import Logo from "./features/logo/Logo";
import SampleLinks from "./features/sample_links/SampleLinks";
import "./App.css";

const App = () => {
  return (
    <main className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/counter" component={Counter} />
          {/* <Route exact path="/home" component={Home} /> */}
          <Route exact path="/logo" component={Logo} />
          <Route exact path="/sample_links" component={SampleLinks} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </main>
  );
};

export default App;
