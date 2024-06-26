// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2fHRB6mCpW5ir08U9IZOnkA1S_NbhdtA",
  authDomain: "auth-integrat-private-route-51.firebaseapp.com",
  projectId: "auth-integrat-private-route-51",
  storageBucket: "auth-integrat-private-route-51.appspot.com",
  messagingSenderId: "699592542413",
  appId: "1:699592542413:web:350e966abb8cc5429b0184"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth