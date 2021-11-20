import { useEffect, useState } from "react";
import {  BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useParams,
    useLocation} from "react-router-dom"
    const axios = require ('axios');
function Header (){
    const [riyadhTemp, setRiyadhTemp] = useState (0);
    const [jeddahTemp, setJeddahTemp] = useState (0);

    useEffect(() => {
        axios.get('http://api.weatherstack.com/current?access_key=83ad110008026780b68b6ab0ef15d471&query=riyadh').then(
            (response) => {
                setRiyadhTemp ( response.data.current.temperature );
            }
        )
        axios.get('http://api.weatherstack.com/current?access_key=83ad110008026780b68b6ab0ef15d471&query=jeddah').then(
            (response) => {
                setJeddahTemp ( response.data.current.temperature );
            }
        )
    }, [])
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info bg-gradient">
                <div className="container-fluid">

                    <Link to="/" className="navbar-brand" >Social Media</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/" class="nav-link">Posts</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/aboutus" class="nav-link">About us</Link>
                            </li>
                            <li class="d-flex navbar-nav dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Weather
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item">Riyadh ({riyadhTemp}°)</a></li>
                            <li><a class="dropdown-item">Jeddah ({jeddahTemp}°)</a></li>
                        </ul>
                        </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;