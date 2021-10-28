import axios from "axios";
import React, { useState } from "react";

function Home() {
  let [WorldTime, setWorldTime] = useState([]);
  const Time = () => {
    axios
      .get("http://worldtimeapi.org/")
      .then((result) => {
        WorldTime = result.data;
        setWorldTime(WorldTime);
        console.log(result);
      })
      .catch((err) => {
        console.log("erorr");
      });
  };

  return (
    <div>
      <button onClick={Time}>time</button>
    </div>
  );
}

export default Home;
