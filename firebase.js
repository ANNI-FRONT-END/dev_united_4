// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkhccI8gyV3oORQJXyCmrIBn6bRG_0s4A",
  authDomain: "dev-united-2a8a1.firebaseapp.com",
  projectId: "dev-united-2a8a1",
  storageBucket: "dev-united-2a8a1.appspot.com",
  messagingSenderId: "439018740544",
  appId: "1:439018740544:web:f3fcd02c52f7f42dadb8a5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app, firebaseConfig };
