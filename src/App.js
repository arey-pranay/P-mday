import React, { useEffect, useState } from "react";
import GSignUp from "./Firebase/GSignUp";
import RealTimeDB from "./Firebase/RealTimeDB";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Landing from "./pages/Landing";
import Steps from "./pages/Steps";
import "animate.css/animate.min.css";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { app } from "./Firebase/Firebase";
import ParticleComponent from "./pages/ParticleComponent";

function App() {
  const auth = getAuth(app);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      // Unsubscribe from the observer when the component unmounts
      unsubscribe();
    };
  }, [auth]);

  return (
    <div>
      <NavBar user={user} />
      {user ? (
        /* Render components for authenticated user */
        <>
          {/* <RealTimeDB /> */}
          <ParticleComponent />
        </>
      ) : (
        /* Render components for non-authenticated user */
        <>
          <Landing /> \ <Steps user={user} />
        </>
      )}
      <Footer intensity={100} />
    </div>
  );
}

export default App;
