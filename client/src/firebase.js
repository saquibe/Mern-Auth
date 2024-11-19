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

// rules_version = '2';

// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read; // Allows all reads
//       allow write: if
//         request.resource.size < 2 * 1024 * 1024 && // Limit file size to 2 MB
//         request.resource.contentType.matches('image/.*') && // Only allow image files
//         request.auth != null; // Only authenticated users can upload
//     }
//   }
// }


// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: "mern-estate-39d91.firebaseapp.com",
//   projectId: "mern-estate-39d91",
//   storageBucket: "mern-estate-39d91.appspot.com",
//   messagingSenderId: "255263261115",
//   appId: "1:255263261115:web:ff4dcd9b110a0ae1df449e"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);