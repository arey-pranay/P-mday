import React from "react";
import Logo from "../assets/logo2.png";
import { app } from "../Firebase/Firebase";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const NavBar = () => {
  const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        console.log("logged in");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signOutGoogle = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        console.log("logged out");
      })
      .catch((error) => {
        console.log(error);
      });
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
      <header
        className="w-full border-green-900 px-5 py-4 mb-0 navbar-shadow"
        style={{
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        }}
      >
        <nav className=" border-gray-800 dark:bg-gray-900 ">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
            <a href="#" className="flex items-center">
              <img src={Logo} className="mr-3 h-12" alt="Landwind Logo" />
            </a>
            <span
              className={`self-center font-mono text-lg md:text-4xl ml-0 md:ml-6  ${
                user ? "text-cyan-600" : "text-purple-900"
              } font-bold whitespace-nowrap dark:text-white`}
            >
              {user
                ? "Hey " + user.displayName.split(" ")[0] + " !"
                : "Play-My-Day"}
            </span>
            <div className="flex items-center">
              <button onClick={user ? signOutGoogle : signInGoogle}>
                <a
                  href="#"
                  className="text-white bg-purple-900 hover:bg-cyan-500 font-medium rounded-lg text-sm px-4 lg:px-10 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-900 focus:outline-none dark:focus:ring-purple-800"
                >
                  Log {user ? "Out" : "In"}
                </a>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
