import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./Components/NavBar";
import AboutUs from "./Components/AboutUs";
import Post from "./Components/Post";
import Comment from "./Components/Comment";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/AboutUs">
            <AboutUs />
          </Route>
          <Route path="/Posts">
            <Post />
          </Route>
          <Route path="/Comments">
            <Comment />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
