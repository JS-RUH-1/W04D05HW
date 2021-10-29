import "../App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Post from "./post";

function NavBar(props) {

  //Define varbiles to store the value from the API 
  // tempreture 
  const [temp, setTemp] = useState("");
  //wheather iCON
  const [icon, setIcon] = useState("");
  //select list  value 
  const [value, setValue] = useState("Riyadh");

  // Fetch the Api based on the value from Select List
  const fetchApi = async () => {
    const data = await axios.get(
      `http://api.weatherstack.com/current?access_key=7ff136af77dfc444577ce6cbb4358c06&query=${value}`
    );
    //Set the Temperature
    setTemp(data.data.current.temperature);
    //Set the Weather icon
    setIcon(data.data.current.weather_icons[0]);
  };

  //Gets Call whenever select list value change
  useEffect(() => {
    fetchApi();
  }, [value]);

  return (
    <Router>
      <nav>
        <li>
          <Link to="/post" className="mylink">
            Post
          </Link>
        </li>
        <li>
          <Link to="/about" className="mylink">
            About Us
          </Link>
        </li>
        <li>
          <select
            style={{ marginLeft: 10 }}
            defaultValue={value}
            onChange={(e) => setValue(e.target.value)}
          >
            <option value="Riyadh">Riyadh</option>
            <option value="Jeddah">Jeddah</option>
            <option value="Abha">Abha</option>
            <option value="Dammam">Dammam</option>
            <option value="Jizan"> Jizan</option>
            <option value="Mecca">Mecca</option>
          </select>
        </li>
        <li style={{ fontSize: 16, marginLeft: 10 }}> {temp + "°"}</li>
        <li>
          {" "}
          <img src={icon} width={40} height={40} style={{ borderRadius: 20 }} />
        </li>
      </nav>

      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/post">
          <Post />
        </Route>
      </Switch>
    </Router>
  );
}

export default NavBar;
