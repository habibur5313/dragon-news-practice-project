// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyAIb9dQ2TLrqYMSMzudkLOw4cG-G8gdU",
  authDomain: "dragon-news-3ca61.firebaseapp.com",
  projectId: "dragon-news-3ca61",
  storageBucket: "dragon-news-3ca61.firebasestorage.app",
  messagingSenderId: "684856143002",
  appId: "1:684856143002:web:9462da6f39a1b7ddb84323"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);