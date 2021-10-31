import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png"


const Header = () => {
    return ( 
        <div className="header">
            <svg width="100%" viewBox="0 0 1680 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1694.61 188.031C876 263.5 643.5 -55 -252.207 188.031L-389.088 215L-442 -183.548L793.956 -226L1658.95 -145.591L1977 103.626L1694.61 188.031Z" fill="#CD9797"/>
                <path d="M-249.611 193.031C569 268.5 801.5 -50 1697.21 193.031L1834.09 220L1887 -178.548L651.044 -221L-213.953 -140.591L-532 108.626L-249.611 193.031Z" fill="#CD9797" fillOpacity="0.23"/>
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