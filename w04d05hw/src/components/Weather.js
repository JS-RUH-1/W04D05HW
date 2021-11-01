
import axios from "axios";
import React, { useEffect, useState} from "react";

function Weather() {
  const [activeCity, setActiveCity] = useState();
  let ids = ["108410", "105343", "2643743",'1850147','5128581'];//,'5368361','2147714'];
  const [cityID,setCityID]= useState('');


  useEffect(() => {
      axios
        .get(
          `https://api.weatherbit.io/v2.0/current?city_id=${cityID}&key=3a12d8c946334fc19f68822fed10176d`
        )
        .then((response) => {
            setActiveCity( {
            city_name: response.data.data[0].city_name,
            temp: response.data.data[0].temp,
            weather_des: response.data.data[0].weather.description
           } );
          
        })
        .catch((error) => {
          console.log(error);
        });
    
},[cityID]);




  return (
    <div id="about">
      <label for="cities">Choose city:</label>
      <select name="cities" id="cities" onChange={(e) => setCityID(e.target.value)}>
      <option value={ids[0]}>Riyadh</option>
      <option value={ids[1]}>Jeddah</option>
      <option value={ids[2]}>London</option>
      <option value={ids[3]}>Tokyo</option>
      <option value={ids[4]}>New york city</option></select>

      <div>
      {activeCity==null?''
      :<div id="city_details">
      <h1>{activeCity.city_name}</h1>
      <br/>
      <h1>{activeCity.weather_des}</h1>
      <br/>
      <h1>{activeCity.temp+"C"}</h1>
      <br/>
      </div>}
      </div>
      
    </div>
  );
}

export default Weather;
