import React, { useEffect, useState } from "react";
import Axios from "axios";

export const Weather = () => {
  const [city, setCity] = useState("Makka");
  const [weather, setweather] = useState();
  const [unit, setUnit] = useState("Metric");

  useEffect(() => {
    Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eb4d6707880d6d57dee4152615ac4706&units=${unit}`
    ).then((res) => {
      console.log(res.data.main.temp);
      setweather(res.data.main.temp);
    });
  }, [city]);

  return (
    <div>
      <select id="lang" onChange={(e) => setCity(e.target.value)}>
        <option value="Makkah">Makkah</option>
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

//   var options = {
//     method: "GET",
//     url: "https://community-open-weather-map.p.rapidapi.com/weather",
//     params: {
//       q: "London,uk",
//       lat: "0",
//       lon: "0",
//       callback: "test",
//       id: "2172797",
//       lang: "null",
//       units: "imperial",
//       mode: "xml",
//     },
//     headers: {
//       "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
//       "x-rapidapi-key": "66cefb02eemshe4873ee87b5b09ep1cbb81jsn94be5923d4e0",
//     },
//   };

// Axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// <h2>
//         <form >
//           <input
//             type="text"
//             placeholder="Enter City"
//             maxLength="50"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//           />
//           <label>
//             <input
//               type="radio"
//               name="units"
//               checked={unit === "imperial"}
//               value="imperial"
//               onChange={(e) => setUnit(e.target.value)}
//             />
//             Fahrenheit
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="units"
//               checked={unit === "metric"}
//               value="metric"
//               onChange={(e) => setUnit(e.target.value)}
//             />
//             Celcius
//           </label>
//           <button type="submit">Get Forecast</button>
//         </form>
//         <p>{weather}</p>
//       </h2>
