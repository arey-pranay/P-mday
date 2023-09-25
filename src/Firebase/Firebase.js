import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxsABJAciCWzeK1G2ZM7_9CO7vozdLZW0",
  authDomain: "play-my-day.firebaseapp.com",
  projectId: "play-my-day",
  storageBucket: "play-my-day.appspot.com",
  messagingSenderId: "577377107292",
  appId: "1:577377107292:web:207eb4e31fe02768209599",
  measurementId: "G-Q1WFBFS2FL",
  databaseUrl: "https://play-my-day-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
