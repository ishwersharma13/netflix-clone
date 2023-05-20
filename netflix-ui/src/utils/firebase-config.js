// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1DTI93BLVDGI-kvEqfxsLqH4n7T4uuFw",
  authDomain: "react-netflix-clone-74635.firebaseapp.com",
  projectId: "react-netflix-clone-74635",
  storageBucket: "react-netflix-clone-74635.appspot.com",
  messagingSenderId: "242319748480",
  appId: "1:242319748480:web:b43c150ab48aeb69e5e565",
  measurementId: "G-FHEJ8ZZT4P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);