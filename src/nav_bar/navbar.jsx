import { useState } from "react";
import bar from "./logo/bar.png";
import logo from "./logo/logo.png";
import { titles } from "./data.jsx";
import "./navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="index.html">
        <img src={logo} alt="bar" className="logo" />
      </a>
      <ul>
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
    </nav>
  );
};

export default Navbar;
