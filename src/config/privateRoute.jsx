import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    // Setup the onAuthStateChanged listener and return the unsubscribe function
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLogin(user !== null);
      setAuthChecked(true); // Mark authentication check as completed
      console.log(user);
    });

    // Clean up the listener on component unmount
    return () => unsubscribe();
  }, []); // Empty dependency array, so it runs only once on component mount

  useEffect(() => {
    // Check if the authentication status has been determined and navigate accordingly
    if (authChecked && !login) {
      navigate("/login");
    }
  }, [authChecked, login]); // Adding authChecked and login as dependencies

  if (login) {
    return children;
  }

  // You might also consider rendering a loading state here, as auth state might not be determined yet.
  return <p>Loading...</p>;
}
