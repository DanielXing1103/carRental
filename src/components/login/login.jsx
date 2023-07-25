import { useEffect, useState } from "react";
import { googleProvider, auth } from "../../config/firebase";
import { signInWithRedirect, signOut } from "firebase/auth";
import "../date/date.css";

const login = () => {
  const user = auth.currentUser;

  const [login, setLogin] = useState(false);

  const singInWithGoogle = async () => {
    try {
      await signInWithRedirect(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  auth.onAuthStateChanged((user) => {
    // user ? setLogin("logout") : setLogin("login");
    setLogin(user !== null);
  });

  return (
    <div>
      <div className="pad"></div>
      <div className="container">
        <div className={"date-content"} >
          <div className="text">Login</div>
          <a className="google-btn" onClick={singInWithGoogle}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              />
            </div>
            <p className="btn-text">
              Sign in with google
            </p>
          </a>
        </div>
      </div>
      <div className="pad"></div>
    </div>
  );
};

export default login;
