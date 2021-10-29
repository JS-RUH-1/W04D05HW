import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Setting from "./components/Setting";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/AboutUs" component={AboutUs} />
          <Route exact path="/Posts" component={Posts} />
          <Route exact path="/Setting" component={Setting} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
