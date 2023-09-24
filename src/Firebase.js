// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// const functions = require("firebase-functions");
// const cors = require("cors")({ origin: true });

// exports.yourFunction = functions.https.onRequest((req, res) => {
//   // Use the cors middleware to set CORS headers
//   cors(req, res, () => {
//     // Your function logic here
//     res.send("Hello, World!");
//   });
// });

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {})
    .catch((error) => console.log(error));
};
export const db = getFirestore(app);
