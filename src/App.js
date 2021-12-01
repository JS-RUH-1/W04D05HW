import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Posts} from './Posts';
import {About} from './About';

function App() {
  const date = new Date();
  const time = date.getTime();
  const[weather, setWeather] = useState({main:{temp:""},sys:{sunset:""}});
  const[city, setCity] = useState("Riyadh");
  
  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6dbdd7a50775ec5b61a9df5ed5846d4d`)
    .then(res => {setWeather(res.data);console.log(res.data)})
    .catch(err => {console.error(err);})
  },[city])
  
  function Weather() {
    if(time > weather.sys.sunset){
      return (
        <div className="row g-0" style={{width:"300px"}}>
          <div className="col-3">
            <div className="dropdown">
              <button className="btn btn-sm btn-secondary dropdown-toggle" type="button" id="dropdownBtn1" 
              data-bs-toggle="dropdown" aria-expanded="false">
                City
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownBtn1">
                <li><button className="dropdown-item" id="Riyadh" onClick={(e)=>{setCity(e.target.id)}}>Riyadh</button></li>
                <li><button className="dropdown-item" id="Jeddah" onClick={(e)=>{setCity(e.target.id)}}>Jeddah</button></li>
                <li><button className="dropdown-item" id="Mecca" onClick={(e)=>{setCity(e.target.id)}}>Makkah</button></li>
                <li><button className="dropdown-item" id="Madinah" onClick={(e)=>{setCity(e.target.id)}}>Almadinah</button></li>
                <li><button className="dropdown-item" id="Dammam" onClick={(e)=>{setCity(e.target.id)}}>Dammam</button></li>
              </ul>
            </div>
          </div>
          <div className="col">
            <span>{weather.name} </span>
            <img src="./sun.png" width="40px" />
            {(weather.main.temp - Math.round(273.15)).toFixed(1)}
            <sup>°C</sup>
          </div>
        </div>
      )
    }else{
      return (
        <div>
          <select>
            <option value="Riyadh" onClick={(e)=>{setCity(e.target.value)}}>Riyadh</option>
            <option value="Jeddah" onClick={(e)=>{setCity(e.target.value)}}>Jeddah</option>
            <option value="Mecca">Makkah</option>
            <option value="Almadinah">Almadina</option>
            <option value="Dammam">Dammam</option>
          </select>
          <img src="./crescent-moon.png" width="35px" />
          {(weather.main.temp - Math.round(273.15)).toFixed(1)}
          <sup>°C</sup>
        </div>
      )
    }
   
  }

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"#85e0b8"}}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Social</Link>
          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">Posts</Link>
              </li>
              <li className="nav-item">
                <Link to="About" className="nav-link">About us</Link>
              </li>
            </ul>
            
              <Weather />

            
          </div>
        </div>
      </nav>
      <Routes>
        <Route exact path="/" element={<Posts />}/>
        <Route path="About" element={<About />}/>
      </Routes>
    </Router>
  );
}

export default App;
