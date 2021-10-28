import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import About from "./About";
import Post from "./Post";
import { Navbar, Container, Nav } from "react-bootstrap";

// import App from "../App";
function NavBar() {
  return (
    <div>
      <Router>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/Home">Home</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/About">About</Nav.Link>
              <Nav.Link href="/Post">Post</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <div>
          <header>
            <Switch>
              <Route path="/Home">
                <Home />
              </Route>

              <Route path="/About">
                <About />
              </Route>

              <Route path="/Post">
                <Post />
              </Route>
            </Switch>
          </header>
        </div>
      </Router>
    </div>
  );
}

export default NavBar;
