
    // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwyS59u6RnfaKLIDMOkPByPuaI54-zXY4",
  authDomain: "proyectogmc-70d84.firebaseapp.com",
  projectId: "proyectogmc-70d84",
  storageBucket: "proyectogmc-70d84.firebasestorage.app",
  messagingSenderId: "961668893618",
  appId: "1:961668893618:web:1e468005fe2075722bf2ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();