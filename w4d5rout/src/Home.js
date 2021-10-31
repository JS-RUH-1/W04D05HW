import axios from "axios";
import {useState, useEffect} from "react";

function Home() {
    const [time, setTime] = useState();
    const [city, setCity]= useState("Paris");
    
    // ------------------------------------------------------------------------------
    const handleSelect=(e)=>{
        console.log(e)
        console.log(e.value)
        setCity(e.value)
        console.log(city)
    }
    useEffect(()=>{ 
        console.log(city)
         axios.get(`http://worldtimeapi.org/api/timezone/Europe/${city}`)
            .then(res=>{
                setTime(res.data.utc_datetime)
                console.log(res.data.utc_datetime)  
            }
               
                )
    },[city]);
    // ------------------------------------------------------------------------------
    return(
        <div>
        <label for="cars">Choose a city:</label>
        <select onChange={(e=>setCity(e.target.value))} name="city" id="city">
          <option value="Paris">Paris</option>
          <option value="London" >London</option>
          <option value="Berlin" >Berlin</option>
        </select>
        <h1>{time}</h1>
        </div>
    );
     
}
export default Home
