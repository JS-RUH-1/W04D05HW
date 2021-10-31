import React,{useState, useEffect} from "react";
import axios from 'axios'

const Weather = () => {

    const [weatherCity, setWeatherCity] = useState("Riyadh")
    const [weatherInfo, setWeatherInfo] = useState([])

    const getValue = () => {
        let selected = document.getElementById("select")
        let x = selected.options[selected.selectedIndex].value
        setWeatherCity(x)
    }
    useEffect(() => {
        async function getInfo() {
            const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${weatherCity}`
            try {
                const res = await axios.get(url, {
                    "headers": {
                        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
                        "x-rapidapi-key": "547bf35bffmsh5a237c4f89a5a72p18d1d5jsn788f5e2d6f5c"
                    }
                })
                
                console.log(res.data);
                setWeatherInfo(res.data.location)
                console.log(weatherInfo);
            } catch (err) {
                console.log(err);
            }
        }

        getInfo()
    }, [weatherCity])


    return ( 
        <div className="weather">
            <h1>City Time</h1>

            <select id="select" onChange={getValue}>
                <option>Riyadh</option>
                <option>London</option>
                <option>Berlin</option>
                <option>Cairo</option>
                <option>Geneva</option>
                <option>Hong Kong</option>
                <option>Madrid</option>
                <option>Rio de Janeiro</option>
            </select>

            {weatherInfo && (
                <div className="weatherInfo">
                    <div>Cuntrey Name: <span>{weatherInfo.country}</span></div>
                    <div>City Name: <span>{weatherInfo.name}</span></div>
                    <div>Date and Current Time in this city: <span>{weatherInfo.localtime}</span></div>
                </div>
            )}
        </div>
     );
}
 
export default Weather;