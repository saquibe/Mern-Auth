// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-67916.firebaseapp.com",
  projectId: "mern-auth-67916",
  storageBucket: "mern-auth-67916.firebasestorage.app",
  messagingSenderId: "410132863029",
  appId: "1:410132863029:web:49ce52080ff8aa8c76b97c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);