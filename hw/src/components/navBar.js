import "../App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
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

  useEffect(() => {
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
    fetchApi();
  }, [value]);

  return (
    <Router>
      <nav>
        <li>
          <NavLink
            to="/"
            className="mylink"
            exact={true}
            activeClassName="selected"
          >
            Post
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="mylink" activeClassName="selected">
            About Us
          </NavLink>
        </li>
        <li>
          <select
            style={{ marginLeft: 20 }}
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
        <li style={{ fontSize: 16, marginLeft: 30 }}> {temp + "°"}</li>
        <li>
          {" "}
          <img
            src={icon}
            width={50}
            height={50}
            alt=""
            style={{ borderRadius: 30 }}
          />
        </li>
      </nav>

      <Switch>
        <Route exact path="/">
          <Post />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default NavBar;
