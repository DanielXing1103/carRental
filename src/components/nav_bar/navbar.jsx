import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { googleProvider, auth } from "../../config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import logo from "../../image/png/logo-no-background.png";
import titles from "./data.jsx";

const Navbar = () => {
  const [login, setLogin] = useState("login");
  const [bar, setBars] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state for login status
  const navigate = useNavigate();
  const user = auth.currentUser;

  const singInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  auth.onAuthStateChanged((user) => {
    user ? setLogin("logout") : setLogin("login");
  });

  return (
    <nav className="navbar">
      <a href="/">
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
          <a
            onClick={user ? logout : singInWithGoogle}
            className="colored-button"
          >
            {login}
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
