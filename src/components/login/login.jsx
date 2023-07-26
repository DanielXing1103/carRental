import { useState, useEffect } from "react";
import { googleProvider, auth } from "../../config/firebase";
import { signInWithRedirect, signInWithEmailAndPassword } from "firebase/auth";
import "../date/date.css";
import { useNavigate } from "react-router-dom";

const login = () => {
  const [login, setLogin] = useState(false);
  const [alert, setAlert] = useState(false); //for error message when not all input are filled
  const [alertMessage, setAlertMessage] = useState("");
  const navigate = useNavigate();
  const singInWithGoogle = async () => {
    try {
      await signInWithRedirect(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };
  auth.onAuthStateChanged((user) => {
    setLogin(user !== null);
  });
  useEffect(() => {
    if (login) {
      navigate("/");
    }
  }, [login]);

  const singInWithEmail = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      if (e.code == "auth/wrong-password") {
        setAlertMessage("Wrong password");
        setAlert(true);
      }
    }
  };

  const validateEmail = (email) => {
    // Regular expression to check email format
    const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailFormat.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
      setAlertMessage("All fields required");
      setAlert(true);
    } else {
      setAlert(false);
    }
    if (!validateEmail(email)) {
      setAlertMessage("Email must be in correct format");
      setAlert(true);
      return;
    }
    singInWithEmail(email, password);
  };

  return (
    <div>
      <div className="pad"></div>
      <div className="container">
        <div className="login-content">
          <div className="text">Login</div>

          <div className="center">
            <p className="login-text">Welcome to carRental</p>
          </div>
          <div className="center">
            <h1 className={alert ? "alert" : "alert off"}>{alertMessage}</h1>
          </div>

          <form className="form" onSubmit={handleSubmit}>
            <div className="center">
              <div className="info-form__1col">
                <span>
                  <label>
                    Email <b>*</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter email"
                    name=""
                    id="email"
                  />
                </span>
                {/* {emailError && <div className="error">{emailError}</div>} */}
              </div>
              <div className="info-form__1col">
                <span>
                  <label>
                    Password <b>*</b>
                  </label>
                  <input
                    className="high"
                    type="password"
                    placeholder="Enter message"
                    name=""
                    id="password"
                  />
                </span>
              </div>
              <button type="submit" className="colored-button">
                Login
              </button>
            </div>
          </form>
          <div className="center">
            <p>
              Don't have a account? <a className="sign-in-a">Sign up</a>
            </p>
            <div id="or">or</div>
            <a className="google-btn" onClick={singInWithGoogle}>
              <div className="google-icon-wrapper">
                <img
                  className="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                />
              </div>
              <div className="center">
                <p className="btn-text">Sign in with google</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="pad"></div>
    </div>
  );
};

export default login;