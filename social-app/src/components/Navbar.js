import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { About } from "./About";
import { Post } from "./Post";
import { Weather } from "./Weather";

export const Navbar = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/post">Post</Link>
          </li>
          <li>
            <Link to="/weather">Weather</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
