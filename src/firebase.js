// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6wRjj_q3jwBwXCSoyvPPsbF1I3LD1SnI",
  authDomain: "avaitiondemo-f59f9.firebaseapp.com",
  projectId: "avaitiondemo-f59f9",
  storageBucket: "avaitiondemo-f59f9.firebasestorage.app",
  messagingSenderId: "323720583796",
  appId: "1:323720583796:web:0787bf2397b078d557cf21",
  measurementId: "G-EQYRMB6P8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
