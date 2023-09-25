import GSignUp from "./Firebase/GSignUp";
import RealTimeDB from "./Firebase/RealTimeDB";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Landing from "./pages/Landing";
import Steps from "./pages/Steps";
import "animate.css/animate.min.css";

function App() {
  return (
    <div>
      {/* <GSignUp />
      <RealTimeDB /> */}
      {/* <NavBar /> */}
      <Landing />
      <Steps />

      <Footer intensity={100} />
    </div>
  );
}

export default App;
