import { useEffect, useState } from "react";
import { googleProvider, auth } from "./firebase";
import { signInWithRedirect, signOut } from "firebase/auth";

export default function PrivateRoute({ children }) {
  const user = auth.currentUser;

  const [login, setLogin] = useState(false);

  const singInWithGoogle = async () => {
    try {
      await signInWithRedirect(auth, googleProvider);
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
    // user ? setLogin("logout") : setLogin("login");
    setLogin(user !== null);
    console.log(user)
  });

  return login ? children :<button onClick={singInWithGoogle}>login</button>;
}
