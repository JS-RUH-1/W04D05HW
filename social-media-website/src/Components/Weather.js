import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Dropdown } from "react-bootstrap";

export default function Weather() {
  let key = "1918a46e259f1a69fceda2acae7f0ceb"; //Add City function.
  let [city, setCity] = useState("Riyadh");
  const [temp, setTemp] = useState();
  const [icon, setIcon] = useState("");

  useEffect(() => {
    Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    )
      .then((response) => {
        setTemp(response.data.main.temp);
        setIcon(response.data.weather[0].icon);
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, [city]);

  return (
    <div className="d-flex color">
      <li className="space">
        <a>
          {city + " "}
          {temp + " C°"}
          <img
            width="30"
            height="30"
            src={`http://openweathermap.org/img/wn/${icon}@4x.png`}
            alt="img"
          />
        </a>
      </li>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Weather
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              setCity("London");
            }}
          >
            London
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setCity("Bali");
            }}
          >
            Bali
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setCity("Riyadh");
            }}
          >
            Riyadh
          </Dropdown.Item>
          <Dropdown.Item></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
