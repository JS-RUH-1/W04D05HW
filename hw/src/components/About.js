import React from "react";

function About(props) {
  return (
    <div>
      <h1>About Page </h1>
      <br />
      <h3>
        The goal of this page is create a social media page which contains
        navbar component, About us component, posts component.{" "}
      </h3>
      <div
        style={{
          textAlign: "left",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          fontSize: 20,
          fontFamily: "Courier New",
          fontWeight: "bold",
          marginLeft: 220,
        }}
      >
        <br />
        <ul>
          <li> The navbar always rendered</li>
          <li>
            {" "}
            The navbar allow the user to navigate between About us and posts
            components
          </li>
          <li>
            {" "}
            The navbar show the wether & tempreture of each city in the select
            list{" "}
          </li>
          <li> Posts page have add btn to add new posts </li>
          <li> Posts page have update&delete to apply it on comments </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
