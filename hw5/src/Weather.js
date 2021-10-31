

import * as Bootstrap from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import Axios from "axios";
import './App.css';

function Weather() {
  const [city, setCity] = useState("Riyadh");
  const [temp, setTemp] = useState();


  const getData = () => {
     Axios.get(
         `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0cee5946006019279360e98e11e78eef`)
         .then((res)=>{
                console.log(res);
        setTemp(res.data.main.temp);      
         })};

  useEffect(() => {
    console.log(city);
    getData();
  },[city]);


  return (
        <div className="weather">

            <Bootstrap.Dropdown>
            <Bootstrap.Dropdown.Toggle variant="secondary" id="dropdown-button-dark-example1">Select City</Bootstrap.Dropdown.Toggle>
            <Bootstrap.Dropdown.Menu variant="dark">
                <Bootstrap.Dropdown.Item><a value="Riyadh"  href=""><span onMouseOver={() => setCity("Riyadh")}> Riyadh </span></a><br/></Bootstrap.Dropdown.Item>
                <Bootstrap.Dropdown.Item><a value="Geneva" href=" "><span onMouseOver={() => setCity("Geneva")}> Geneva</span></a><br/></Bootstrap.Dropdown.Item>
                <Bootstrap.Dropdown.Item><a value="Paris" href=" "><span onMouseOver={() => setCity("Paris")}> Paris </span></a><br/></Bootstrap.Dropdown.Item>
                <li style= {{padding:'20px'}}><a>{temp + " C°" }</a></li>
            </Bootstrap.Dropdown.Menu>
            </Bootstrap.Dropdown>  

        </div>
     );
}
 
export default Weather;