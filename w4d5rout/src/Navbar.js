import React from "react";
import * as ReactBootStrap from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, BrowserRouter as Router, Switch ,Link} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Post from "./Post";
export default function Navbar(){
    return(
        // ---Router one page and chang betewn the data from js in Html it chang the page-------
        //-------if i well ues the navebar it patter to bote the Router code her -------------
        //-------if you ues 2 js it gana be show one page -----------(always chack the import)..
         <div>
             <Router>
        <ReactBootStrap.Navbar bg="dark" variant="dark">
          <ReactBootStrap.Container>
            <ReactBootStrap.Nav className="me-auto">
              <ReactBootStrap.Nav.Link><Link exact to="/">Home</Link></ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link><Link  to="/about">About us</Link></ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link><Link  to="/post">post</Link></ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>
     {/* ---------------------------------------------------------------------- */}
    {/* <nav>
      <ul>
        <li><Link exact to="/" >Home</Link></li>
        <li><Link to="/about">About</Link></li>
        ----this work like <a></a>--<nav>   new div maby??? فاعل مجهول حاليا----
      </ul>
    </nav> */}

    {/* -----Switch to chose what page match----------- */}
        <Switch>
    <Route exact path="/" ><Home/></Route>
    <Route   path="/about" ><About/></Route>
    <Route   path="/post" ><Post/></Route>
    {/* -----path with p  not P --------------- */}
    </Switch>
        </Router>
      </div> 
        
    );
}