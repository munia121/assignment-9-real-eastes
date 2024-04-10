// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ70H_Z2s8CG2f6Q1rsayUrN-StYL66AA",
  authDomain: "assignment-009-823d4.firebaseapp.com",
  projectId: "assignment-009-823d4",
  storageBucket: "assignment-009-823d4.appspot.com",
  messagingSenderId: "235211402086",
  appId: "1:235211402086:web:59c1b127901da984ca76a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;