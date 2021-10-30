import React from "react";

export default function AboutUs() {
  return (
    <div>
      <div id="aboutUs" className="text-center container p-4 mt-2 mb-5">
        <h1 className="display-1">About us</h1>
        <div className="d-grid text-center">
          <div className="g-col-6 p-3 m-2">
            <h3 className="display-6">About developer</h3>
            <p className="fs-6 text-start">
              I’m a fresh graduate from KSU and I developed this application as
              a requirement for Tuwaiq camp.
            </p>
            <a
              className="btn btn-primary"
              href="https://www.linkedin.com/in/abdullah-alsabi"
              role="button"
            >
              visit{" "}
            </a>
            <br />
            <br />

            <a
              className="btn btn-primary"
              href="https://github.com/Abdullah-Alsabi"
              role="button"
            >
              visit
            </a>
          </div>

          <div className="g-col-6 p-3 m-2">
            <h3 className="display-6">About app</h3>
            <p className="fs-6 text-start">
              This application helps users to be updated about the weather. It
              also allows users to add their favorite cities to the watch list.
            </p>
            <a className="btn btn-primary" href="#container" role="button">
              visit
            </a>
          </div>

          <div className="g-col-6 p-3 m-2">
            <h3 className="display-6">About API</h3>
            <p className="fs-6 text-start">
              The OWM API is free on a basic plan and high-precision API. Their
              weather database is huge. You can use diverse metrics (e.g.,
              temperature, humidity, air pollution, wind speed and degree,
              clouds percentage). You can also get a simple forecast, daily
              forecast, historical weather data, or use a city search.
            </p>
            <a
              className="btn btn-primary"
              href="https://openweathermap.org/guide"
              role="button"
            >
              visit
            </a>
          </div>

          <div className="g-col-6 p-3 m-2">
            <h3 className="display-6">About Tuwaiq</h3>
            <p className="fs-6 text-start">
              The Tuwaiq Programming embraces beginners through nurturing and
              training them from scratch, giving professionals an opportunity to
              reﬁne their programming skills, and opening doors to those who are
              interested in learning new skills, building websites or designing
              applications for their startup business ideas.
            </p>
            <a
              className="btn btn-primary"
              href="https://bootcamp.sa/tuwaiq1000"
              role="button"
            >
              visit
            </a>
          </div>
        </div>
        <hr id="hrColor" />
      </div>
    </div>
  );
}
