import axios from "axios";
import React, { useState } from "react";

function Home() {
  const Weather = () => {
    axios
      .get("http://worldtimeapi.org/api")
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log("erorr");
      });
  };

  return <h2>{Weather}</h2>;
}

export default Home;
