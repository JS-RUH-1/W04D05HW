import * as ReactBootStrap from "react-bootstrap";
import React from "react";
import { BrowserRouter as Router, Route, Switch ,Link} from 'react-router-dom'


function Navbar() {
    return (
      <div id="navbar">
        <ReactBootStrap.Navbar bg="dark" variant="dark" >
          <ReactBootStrap.Container>
            <ReactBootStrap.Navbar.Brand href="/Post">fakebook </ReactBootStrap.Navbar.Brand>
            <div id="Nav">
              <Link className="Link" to="/Post">Post</Link>
              <Link className="Link" to="/About">About</Link>
              <Link className="Link" to="/Weather">Weather</Link>
            </div>
          </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>
      </div>
    );
}
let links=document.getElementsByClassName('Link');
for(let i=0;i<links.length;i++){
    links[i].style.color="green";
    links[i].style="text-decoration:none";
}

export default Navbar;