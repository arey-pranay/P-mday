import { app } from "./Firebase";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
function GSignUp() {
  const signInGoogle = () => {
    signInWithPopup(auth, provider);
  };
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        console.log("error");
        setUser(null);
      }
    });
  }, []);
  return (
    <div>
      Hii Firebase User You hehehe
      <button className="bg-fuchsia-800" onClick={signInGoogle}>
        Sign Up with Google
      </button>
      <h1>{user === null ? "hii" : user.email}</h1>
    </div>
  );
}

export default GSignUp;
