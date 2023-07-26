// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjb0dKXgTsuXKcs8KW0KjIV5NCcV9MyAY",
  authDomain: "first-project-55b6c.firebaseapp.com",
  projectId: "first-project-55b6c",
  storageBucket: "first-project-55b6c.appspot.com",
  messagingSenderId: "462462761867",
  appId: "1:462462761867:web:236ae2e0f53cafff81cd8e",
  measurementId: "G-QVZXZ2JD4Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);