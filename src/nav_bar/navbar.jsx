import { useState } from "react";
import bar from './logo/bar.png' 
import logo from "./logo/logo.png"; 
import './navbar.css'; // Import the CSS file

const Navbar = () =>{

    return (
      <nav className="navbar">
        <img src={logo} alt="bar" className="logo" />
      </nav>
    );

}

export default Navbar