import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Route, BrowserRouter as Router, Switch ,Link} from "react-router-dom";
import Navbar from "./Navbar";
// import { useEffect, useState} from 'react';
// import Axios from 'axios'

function App() {
  return (
    
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;

