// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';




const firebaseConfig = {
  apiKey: "AIzaSyAhmKBzZthyhSokgeDSVahYLva4uT3iE4c",
  authDomain: "bocastore-beef0.firebaseapp.com",
  projectId: "bocastore-beef0",
  storageBucket: "bocastore-beef0.appspot.com",
  messagingSenderId: "531333350746",
  appId: "1:531333350746:web:fb58a7a05b7ac6eebc1f63",
  measurementId: "G-FVR67B0P9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);