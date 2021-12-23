import './App.css';
import Navigation from './screens/navigationBar/NavigationBar';
import ParticleAnimation from 'react-particle-animation'
import Header from './screens/header/Header';
import AboutMe from './screens/aboutMe/AboutMe';
import Technologies from './screens/technologies/Technologies';
import ContactMe from './screens/contactMe/ContactMe';
import Portfolio from './screens/portfolio/Portfolio';
import Footer from './screens/footer/Footer';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <ParticleAnimation
        style={{ height: '94vh' }}
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