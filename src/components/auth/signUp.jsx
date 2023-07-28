import { useState, useEffect } from "react";
import { googleProvider, auth } from "../../config/firebase";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import "../date/date.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  // Initializing state variables and corresponding setters using the 'useState' hook
  const [login, setLogin] = useState(false); // Represents whether the user is logged in or not
  const [alert, setAlert] = useState(false); // Represents whether to show an error message
  const [alertMessage, setAlertMessage] = useState(""); // Stores the error message text
  const navigate = useNavigate(); // React router's 'useNavigate' hook for navigation

  // Function to sign in with Google using Firebase authentication
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (e) {
      if (e.code === "auth/popup-closed-by-user") {
        setAlertMessage("Auth window closed");
        setAlert(true);
      } else {
        setAlertMessage(e.code);
        setAlert(true);
      }
    }
  };

  // Firebase auth state change listener, updates the 'login' state based on whether the user is authenticated or not
  useEffect(() => {
    // Add an auth state change listener to track the user's login status
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLogin(!!user); // If 'user' is not null, it means the user is logged in, so 'login' will be set to 'true', otherwise 'false'
    });

    // Clean up the listener when the component is unmounted
    return () => unsubscribe();
  }, []);
  // useEffect hook that runs whenever the 'login' state changes
  useEffect(() => {
    // If the 'login' state becomes 'true' (user is logged in), navigate to the home page ("/")
    if (login) {
      navigate("/");
    }
  }, [login]);

  // Function to create a new user with email and password using Firebase authentication
  const createUserWithEmail = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
      // Handling different authentication error codes and updating the 'alert' and 'alertMessage' states accordingly
      if (e.code === "auth/weak-password") {
        setAlertMessage("Password Is Too Weak");
        setAlert(true);
      } else if (e.code === "auth/invalid-email") {
        setAlertMessage("Email Must Be In Correct Format");
        setAlert(true);
      } else if (e.code === "auth/email-already-in-use") {
        setAlertMessage("Email Already In Use");
        setAlert(true); // Show the error message
      } else {
        setAlertMessage(e.code); // Display the Firebase error code directly for other cases
        setAlert(true);
      }
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the email, password, and repeated password values from the form
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const password1 = document.getElementById("password-repeat").value;

    // Check if email and passwords are provided and if the passwords match, if not, show an alert
    if (password !== password1 || !email || !password || !password1) {
      if (password !== password1) {
        setAlertMessage("Passwords do not match");
      } else if (!email) {
        setAlertMessage("Email field is required");
      } else if (!password) {
        setAlertMessage("Password field is required");
      } else if (!password1) {
        setAlertMessage("Repeat Password field is required");
      }
      setAlert(true); // Show the error message
    } else {
      setAlert(false); // Hide th e error message if all fields are provided and passwords match
      createUserWithEmail(email, password);
    }
  };

  // Additional comments or explanation can be provided here for the context of the entire component or how it fits into the overall application.

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
            <a className="google-btn" onClick={signInWithGoogle}>
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
