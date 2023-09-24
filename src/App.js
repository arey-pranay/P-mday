import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Landing from "./pages/Landing";
import Steps from "./pages/Steps";

function App() {
  return (
    <div>
      {/* <NavBar /> */}
      <Landing />
      <Steps />
      <Footer intensity={100} />
    </div>
  );
}

export default App;