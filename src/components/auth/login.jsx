import { useState, useEffect } from "react";
import { googleProvider, auth } from "../../config/firebase";
import { signInWithRedirect, signInWithEmailAndPassword } from "firebase/auth";
import "../date/date.css";
import { useNavigate } from "react-router-dom";

const login = () => {
// Initializing state variables and corresponding setters using the 'useState' hook
const [login, setLogin] = useState(false); // Represents whether the user is logged in or not
const [alert, setAlert] = useState(false); // Represents whether to show an error message
const [alertMessage, setAlertMessage] = useState(""); // Stores the error message text
const navigate = useNavigate(); // React router's 'useNavigate' hook for navigation

// Function to sign in with Google using Firebase authentication
const signInWithGoogle = async () => {
  try {
    await signInWithRedirect(auth, googleProvider);
  } catch (err) {
    console.error(err); // Log any errors that occur during sign-in with Google
  }
};

// Firebase auth state change listener, updates the 'login' state based on whether the user is authenticated or not
auth.onAuthStateChanged((user) => {
  setLogin(user !== null); // If 'user' is not null, it means the user is logged in, so 'login' will be set to 'true', otherwise 'false'
});

// useEffect hook that runs whenever the 'login' state changes
useEffect(() => {
  // If the 'login' state becomes 'true' (user is logged in), navigate to the home page ("/")
  if (login) {
    navigate("/");
  }
}, [login]);

// Function to sign in with email and password using Firebase authentication
const signInWithEmail = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    // Handling different authentication error codes and updating the 'alert' and 'alertMessage' states accordingly
    if (e.code === "auth/wrong-password") {
      setAlertMessage("Wrong Password");
      setAlert(true); // Show the error message
    } else if (e.code === "auth/user-not-found") {
      setAlertMessage("User Not Found");
      setAlert(true);
    } else if (e.code === "auth/invalid-email") {
      setAlertMessage("Email must be in correct format");
      setAlert(true);
    } else {
      setAlertMessage(e.code); // Display the Firebase error code directly for other cases
      setAlert(true);
    }
  }
};

// Function to handle form submission
const handleSubmit = (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  // Get the email and password values from the form
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Check if email and password are provided, if not, show an alert
  if (!email || !password) {
    setAlertMessage("All fields required");
    setAlert(true); // Show the error message
    return;
  } else {
    setAlert(false); // Hide the error message if both email and password are provided
  }

  // Call the 'signInWithEmail' function to attempt signing in with the provided email and password
  signInWithEmail(email, password);
};

// Additional comments or explanation can be provided here for the context of the entire component or how it fits into the overall application.


  return (
    <div>
      <div className="pad"></div>
      <div className="container">
        <div className="login-content">
          <div className="text">Login</div>

          <div className="center">
            <p className="login-text">Welcome back to carRental</p>
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
              <button type="submit" className="colored-button">
                Login
              </button>
            </div>
          </form>
          <div className="center">
            <p>
              Don't have a account?{" "}
              <a href="/signup" className="sign-in-a">
                Sign up
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

export default login;
