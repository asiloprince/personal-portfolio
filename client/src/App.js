import "./App.css";
import Navigation from "./pages/navigationBar/NavigationBar";
import ParticleAnimation from "react-particle-animation";
import Header from "./pages/header/Header";
import AboutMe from "./pages/aboutMe/AboutMe";
import Technologies from "./pages/technologies/Technologies";
import ContactMe from "./pages/contactMe/ContactMe";
import Portfolio from "./pages/portfolio/Portfolio";
import Footer from "./pages/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />

      <ParticleAnimation
        style={{ height: "94vh" }}
        background={{ r: 4, g: 4, b: 44, a: 1 }}
        numParticles={60}
        particleSpeed={0.3}
        interactive={true}
        particleRadius={1.5}
      />

      <AboutMe />
      <Portfolio />
      <Technologies />
      <ToastContainer />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
