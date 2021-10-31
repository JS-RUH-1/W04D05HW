import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Aboutus from './Aboutus';
import Posts from './Posts';
import { useEffect, useState } from 'react';
import Axios from 'axios';


function NavBar() {

    const [timezone, setTimezone] = useState("Asia")
    const [items , setItems]= useState([])

    useEffect(()=>{
      
        Axios.get(`http://worldtimeapi.org/api/timezone/${timezone}`)
             .then((response) =>  {
            console.log(response)
            setItems(response.data.data)
        })

    
},[timezone])

    return (
        
        <Router>
            <div>
            <div>
        
        <button onClick={() => setType("anime")}>Anime</button>
        <button onClick={() => setType("manga")}>Manga</button>

        <div class="posters">
        {items.map(function(item, i){
            console.log('test');
            return (<div>
                <h3>{item.attributes.canonicalTitle}</h3>
                <img src={item.attributes.posterImage.medium} />
            </div>)
          })}
          </div>
        </div>
                <Navbar bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">

                            <Nav.Link ><Link to="/Posts">Posts</Link></Nav.Link>
                            <Nav.Link ><Link to="/aboutus">Aboutus</Link></Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1" onClick={() => setType("anime")}>Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                    </Container>
                </Navbar>

                <Switch>

                    <Route exact path="/Posts">
                        <Posts />
                    </Route>
                    <Route exact path="/aboutus">
                        <Aboutus />
                    </Route>

                </Switch>
            </div>
        </Router>
    )
}

export default NavBar