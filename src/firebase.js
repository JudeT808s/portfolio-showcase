// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7QUxWrVaLU9WfvZMLAGje28C_T085O-Y",
  authDomain: "jude-portfolio-e99bb.firebaseapp.com",
  databaseURL: "https://jude-portfolio-e99bb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "jude-portfolio-e99bb",
  storageBucket: "jude-portfolio-e99bb.appspot.com",
  messagingSenderId: "420358089713",
  appId: "1:420358089713:web:f35ed99008534be29df250",
  measurementId: "G-DG5N3CDS81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);