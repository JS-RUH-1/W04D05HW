import {Navbar,Nav,Container,Dropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState,useEffect} from "react";
import axios from 'axios';


function NavBar(){
  const [weather,setweather] = useState(0)
  const [city,setCity] = useState('Riyadh')
  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=efa6a0f3da9219aaa9ba69f56870cb7c`).then((res)=>{
      setweather(res.data.main.temp)
    }).catch((e)=>{
      console.log("ops an error " + e )
    })
  }, [city])
  let dgree = weather-273.15; 
  
  function changeCity(event:any){
    setCity(event.target.id)
  }


return(
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">React Soical</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Posts</Nav.Link>
        <Nav.Link href="/about-us">About Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
  <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">{`${parseInt(dgree.toString())} C`}</Nav.Link>
        <Dropdown>
  <Dropdown.Toggle variant="primary" id="dropdown-basic">
    Pick A City
  </Dropdown.Toggle>
  <br/>
  <Dropdown.Menu>
    <Dropdown.Item onClick={changeCity} id="Riyadh">Riyadh</Dropdown.Item>
    <Dropdown.Item onClick={changeCity} id="London">London</Dropdown.Item>
    <Dropdown.Item onClick={changeCity} id="Tokyo">Tokyo</Dropdown.Item>
    <Dropdown.Item onClick={changeCity} id="Moscow">Moscow</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
      </Nav>
    </Navbar.Collapse>
</Navbar>
);
}

export{NavBar}