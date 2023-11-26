// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJTL_c3IwgdrOfMENNYd_nc7o9B_F7KCk",
  authDomain: "authentication-50fc7.firebaseapp.com",
  projectId: "authentication-50fc7",
  storageBucket: "authentication-50fc7.appspot.com",
  messagingSenderId: "825195656003",
  appId: "1:825195656003:web:c5bf5fc274d0fd113e35f6",
  measurementId: "G-NPZR0YT049",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
