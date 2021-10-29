import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { useState, useEffect } from "react";

//  "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=8618b3d831e9d657b3baac2facdfe14d"
function NavBar() {
  let [weather, setWeather] = useState({});
  let test;
  //c9f8ac3eb82f05a77a780df0ac9761db0287f8c1e74033771c301a0499a1581c

  useEffect(() => {
    axios
      .get("https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/riyadh")
      .then((data) => {
        console.log(data.data);
        console.log(data.data.time);
        console.log(data.data.date);
        // setWeather({ tempr: data.data.main.temp });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [test]);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Brand className="d-lg-none" href="/">
            {weather.tempr}
            <button onClick={() => {}}>C</button>
            <button>C</button>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/AboutUs">About us</Nav.Link>
              <Nav.Link href="/Posts">Posts</Nav.Link>
              <Nav.Link href="/Setting">Setting</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default NavBar;
