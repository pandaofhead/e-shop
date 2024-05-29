// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq1ZUbKLziftcD_77xUAYL6Yo83VsTr8c",
  authDomain: "e-shop-60d07.firebaseapp.com",
  projectId: "e-shop-60d07",
  storageBucket: "e-shop-60d07.appspot.com",
  messagingSenderId: "775997617209",
  appId: "1:775997617209:web:57239aed784a73551f49e8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
