// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUlskPu4fRUia_I-dyVb8zG_JnfLhHLb8",
  authDomain: "shoplify-product-variant.firebaseapp.com",
  projectId: "shoplify-product-variant",
  storageBucket: "shoplify-product-variant.appspot.com",
  messagingSenderId: "270010556604",
  appId: "1:270010556604:web:7109b4a7636bf045e770b9",
  measurementId: "G-QJ48B6MZ41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);