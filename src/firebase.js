// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdc0TBba2RDgIYQ5t_SSfGAEsJG4RkS5k",
  authDomain: "hotel-app-c44d2.firebaseapp.com",
  projectId: "hotel-app-c44d2",
  storageBucket: "hotel-app-c44d2.appspot.com",
  messagingSenderId: "781704073027",
  appId: "1:781704073027:web:6b361df6f76979236629f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export {db};