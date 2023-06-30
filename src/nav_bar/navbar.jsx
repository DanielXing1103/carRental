import { useState } from "react";
import bar from "./logo/bar.png";
import logo from "./logo/png/logo-no-background.png";
import { titles } from "./data.jsx";
import "./navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="index.html">
        <img src={logo} alt="bar" className="logo" />
      </a>
      <ul className="nav-sections">
        {titles.map((title) => {
          const { name, url, id } = title;
          console.log(name);
          return (
            <li key={id}>
              <a href={url}>{name}</a>
            </li>
          );
        })}
      </ul>
      <div className="nav-buttons">
        <a href="/" className="nav-bar-sign-in">
          Sign In
        </a>
        <a href="/" className="nav-bar-register">
          Register
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
