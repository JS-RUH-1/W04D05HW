import React, { useEffect, useState } from "react";
import Axios from "axios";

export const Weather = () => {
  const [city, setCity] = useState("Makka");
  const [weather, setweather] = useState();

  useEffect(() => {
    Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eb4d6707880d6d57dee4152615ac4706&units=Metric`
    ).then((res) => {
      setweather(res.data.main.temp);
    });
  }, [city]);

  return (
    <div className="App-header">
      <select id="city" onChange={(e) => setCity(e.target.value)}>
        <option value="Makka">Makka</option>
        <option value="Jeddah">Jeddah</option>
        <option value="Riyadh">Riyadh</option>
        <option value="London">London</option>
      </select>
      <p></p>

      <h2>Weather in {city}</h2>
      <p>{weather}</p>
    </div>
  );
};
