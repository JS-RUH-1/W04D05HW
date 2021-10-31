import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { About } from "./About";
import { Post } from "./Post";
import { Weather } from "./Weather";

export const Navbar = () => {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Social
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">
            <Link to="/post" style={{ textDecoration: 'none',color:'black' }}>Post</Link>
            </a>
            <a class="nav-item nav-link" href="#">
            <Link to="/weather" style={{ textDecoration: 'none',color:'black' }}>Weather</Link>
            </a>
            <a class="nav-item nav-link" href="#">
            <Link to="/about" style={{ textDecoration: 'none',color:'black' }}>About</Link>
            </a>
          </div>
        </div>
      </nav>
      <div></div>
    </div>
  );
};

// <ul>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/post">Post</Link>
//           </li>
//           <li>
//             <Link to="/weather">Weather</Link>
//           </li>
//         </ul>
