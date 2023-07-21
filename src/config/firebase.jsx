// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZp1-u78iq9E36A2OeNSow1x5ChpDDGmc",
  authDomain: "carrental-44ff0.firebaseapp.com",
  projectId: "carrental-44ff0",
  storageBucket: "carrental-44ff0.appspot.com",
  messagingSenderId: "354595046688",
  appId: "1:354595046688:web:96202d16d7c12771ccc345",
  measurementId: "G-V9EVZ805DG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();