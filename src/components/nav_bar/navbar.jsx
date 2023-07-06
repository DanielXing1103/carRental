import { useState } from "react";
import logo from "./logo/png/logo-no-background.png";
import { titles } from "./data.jsx";
import "./navbar.css"; // Import the CSS file

const Navbar = () => {
  const [bar, setBars] = useState(false);
  return (
    <nav className="navbar">
      <a href="index.html">
        <img src={logo} alt="bar" className="logo" />
      </a>
      <div className="flex-grow"></div>
      <ul className={bar ? "nav-sections" : "nav-sections none"}>
        {titles.map((title) => {
          const { name, url, id } = title;
          return (
            <li key={id}>
              <a href={url}>{name}</a>
            </li>
          );
        })}

        <div className="nav-buttons">
          <a href="/book" className="nav-bar-sign-in">
            Sign In
          </a>
          <a href="/book" className="colored-button">
            Register
          </a>
        </div>
      </ul>

      <div className="dropdown">
        <i
          className={
            bar ? "fa-solid fa-times fa-2xl" : "fa-solid fa-bars fa-2xl"
          }
          onClick={() => {
            setBars(!bar);
          }}
        ></i>
      </div>
    </nav>
  );
};

export default Navbar;
