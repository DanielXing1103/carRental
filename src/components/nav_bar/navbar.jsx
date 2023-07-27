import { useState, useEffect } from "react";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import logo from "../../image/png/logo-no-background.png";
import titles from "./data.jsx";
import Loading from "../loading/loading";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // Introduce the loading state
  const user = auth.currentUser;
  const [login, setLogin] = useState(false);
  const [bar, setBars] = useState(false);

  const logout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("dates");
      localStorage.removeItem("car");
      localStorage.removeItem("contacts");
      localStorage.removeItem("requestId");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Use useEffect to fetch the authentication state asynchronously
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLogin(user !== null);
      setLoading(false); // Once the state is retrieved, set loading to false
    });

    return () => unsubscribe(); // Clean up the listener on component unmount
  }, []);

  if (loading) {
    // Show the loading page while the authentication state is being fetched
    return <Loading />;
  }

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
            onClick={
              user
                ? logout
                : () => {
                    navigate("/login");
                  }
            }
            className="colored-button"
          >
            {login ? "logout" : "login"}
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
