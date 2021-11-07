import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg"


const Header = () => {
    return ( 
        <div className="header">
            <svg width="100%" viewBox="0 0 1680 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="" fill="#CD9797"/>
                <path d="" fill="#CD9797" fillOpacity="0.23"/>
            </svg>
            <nav className="navBar">
                <img src={logo} alt="" width="66" height="66"/>
                <ul className="list">
                    <Link to='/'>
                        <li className="item">Posts</li>
                    </Link>
                    <span>|</span>
                    <Link to='/about'>
                        <li className="item">About us</li>
                    </Link>
                </ul>
            </nav>
        </div>
     );
}

export default Header;