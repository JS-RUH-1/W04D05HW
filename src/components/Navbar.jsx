import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from 'axios';
export default function Navbar(){
    const [weatherCity, setWeatherCity] = useState("Riyadh")
    const [weather, setWeather] = useState(null)
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${weatherCity}&appid=e36ed364400282e43250b6c4c0274d44&units=metric`)
        .then(res => setWeather(res.data));

    }, [weatherCity]);

    return <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav me-auto">
          <NavLink activeClassName='active' className="nav-link" to="/">Home</NavLink>
          <NavLink activeClassName='active' className="nav-link" to="/about">About</NavLink>
            
        </div>
        <div className="navbar-nav">
        <div class="nav-item dropdown">
                <div class="nav-link dropdown-toggle ms-auto" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    {weather? <>
                        <img width='50' src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} /> {weather.name} {weather.main.temp}°C 
                    </> : "Loading"}
                </div>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {["Riyadh", "Jeddah", "Buraydah", "London"].filter(c => c !== weatherCity).map((city) => 
                    <li><a class="dropdown-item" onClick={() => setWeatherCity(city)} href="#">{city}</a></li>
                    )}
                </ul>
            </div>
        </div>
      </div>
    </div>
  </nav>
}