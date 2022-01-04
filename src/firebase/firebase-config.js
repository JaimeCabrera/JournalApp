import "firebase/firestore";
import "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1KZZwlWhofYOOEe2eQkMK_CYwYhhC1-w",
  authDomain: "journalapp-2a01a.firebaseapp.com",
  projectId: "journalapp-2a01a",
  storageBucket: "journalapp-2a01a.appspot.com",
  messagingSenderId: "983762336141",
  appId: "1:983762336141:web:927ad2aeda14e7e353a5c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider();
// const registerUserWithEmailAndPassword = new createUserWithEmailAndPassword();

export {
  db,
  googleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
