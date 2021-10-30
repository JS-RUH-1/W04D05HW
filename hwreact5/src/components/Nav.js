import React, { useEffect, useState } from "react";
import "../index.css";
import Axios from "axios";

function Nav() {
  const [city, setCity] = useState("Riyadh");
  const [temp, setTemp] = useState();
  const [icon, setIcon] = useState("");

  const getData = () => {
     Axios.get(
         `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0cee5946006019279360e98e11e78eef`)
         .then((res)=>{
                console.log(res);
        setTemp(res.data.main.temp);
        setIcon(res.data.weather[0].icon);        
         })};

  useEffect(() => {
    console.log(city);
    getData();
  },[city]);


  return (<div>
    <ul>
      <li>
        <a class="active" href="/post">
          Home
        </a>
      </li>
      <li>
        <a href="/aboutus">About</a>
      </li>
      

      <li class="dropdown">
        <a href=" " class="dropbtn">
        Weather IS
        </a>
        <div class="dropdown-content">
          <a value="Riyadh"  href=" ">
          <span onMouseOver={() => setCity("Riyadh")}>  Riyadh </span> 
          </a>
          <a value="Dubai" href=" ">
          <span onMouseOver={() => setCity("Dubai")}>  Dubai </span> 
          </a> 
          <a value="London" href=" ">
          <span onMouseOver={() => setCity("London")}>  London </span> 
          </a>
          <a value="New York" href=" ">
          <span onMouseOver={() => setCity("New York")}>  New York </span> 
          </a>
          <a value="New Zealand" href=" ">
          <span onMouseOver={() => setCity("New Zealand")}>  New Zealand</span> 
          </a>

          <a value="Canada" href=" ">
          <span onMouseOver={() => setCity("Canada")}>Canada</span> 
          </a>
        </div>
      </li>


      <li><a>{temp + " C°" } <img width ="20" height="20" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt=""/></a></li>

    
    </ul>

    </div>
  );
}

export default Nav;
