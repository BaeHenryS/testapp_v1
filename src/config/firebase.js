// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdVSIQH7gZrjO726AIoXQkC0HZPpymKVU",
  authDomain: "summer-project-henryfleury.firebaseapp.com",
  databaseURL: "https://summer-project-henryfleury-default-rtdb.firebaseio.com",
  projectId: "summer-project-henryfleury",
  storageBucket: "summer-project-henryfleury.appspot.com",
  messagingSenderId: "885708940935",
  appId: "1:885708940935:web:cb8f9985f6f30d2f70ba22",
  measurementId: "G-WKBP2E7V0E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };