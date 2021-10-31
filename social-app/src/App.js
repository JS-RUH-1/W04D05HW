import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Post } from "./components/Post";
import { Weather } from "./components/Weather";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>

        <div>
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/post">
              <Post />
            </Route>
            <Route exact path="/weather">
              <Weather />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
