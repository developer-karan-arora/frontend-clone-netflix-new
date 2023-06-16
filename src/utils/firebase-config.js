// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTJxVXg6DM5rDKHMaIHazEsduUh6gKHbg",
  authDomain: "clone-netflix-f9445.firebaseapp.com",
  projectId: "clone-netflix-f9445",
  storageBucket: "clone-netflix-f9445.appspot.com",
  messagingSenderId: "826454140036",
  appId: "1:826454140036:web:2b132af014859d25cb0ed1",
  measurementId: "G-M7DH4FBSWM"
};

// Initialize Firebase
// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);