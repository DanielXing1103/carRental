import { useState, useEffect } from "react";
import { googleProvider, auth } from "../../config/firebase";
import {
  signInWithRedirect,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import "../date/date.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
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

  const createWithEmail = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
      if (e.code == "auth/email-already-in-use") {
        setAlertMessage("Email Already In Use");
        setAlert(true);
      } else if (e.code == "auth/invalid-email") {
        setAlertMessage("Email Must Be In Correct Format");
        setAlert(true);
      } else if (e.code == "auth/weak-password") {
        setAlertMessage("Password Is Too Weak");
        setAlert(true);
      } else {
        setAlertMessage(e.code);
        setAlert(true);
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const password1 = document.getElementById("password-repeat").value;

    if (password != password1 || !email || !password || !password1) {
      if (password != password1) {
        setAlertMessage("password does not match");
      }
      if (!email || !password || !password1) {
        setAlertMessage("All fields required");
      }
      setAlert(true);
      return;
    } else {
      setAlert(false);
      createWithEmail(email, password);
    }
  };

  return (
    <div>
      <div className="pad"></div>
      <div className="container">
        <div className="login-content">
          <div className="text">Sign Up</div>

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
              </div>
              <div className="info-form__1col">
                <span>
                  <label>
                    Password <b>*</b>
                  </label>
                  <input
                    className="high"
                    type="password"
                    placeholder="Enter password"
                    name=""
                    id="password"
                  />
                </span>
              </div>
              <div className="info-form__1col">
                <span>
                  <label>
                    Repeat Password <b>*</b>
                  </label>
                  <input
                    className="high"
                    type="password"
                    placeholder="Repeat password"
                    name=""
                    id="password-repeat"
                  />
                </span>
              </div>
              <button type="submit" className="colored-button">
                Sign Up
              </button>
            </div>
          </form>
          <div className="center">
            <p>
              Already have a account?{" "}
              <a href="/login" className="sign-in-a">
                Login
              </a>
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

export default SignUp;
