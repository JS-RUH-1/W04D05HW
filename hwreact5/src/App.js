import "./App.css";
import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Aboutus from "./components/Aboutus";
import Post from "./components/Post";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/post">
            <Post />
          </Route>
          <Route path="/aboutus">
            <Aboutus />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
