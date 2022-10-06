import NavBar from './components/NavBar';
import Welcome from './sections/Welcome';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experiences from './sections/Experiences';
import AboutMe from './sections/AboutMe';
import Contact from './sections/Contact';
import './index.css';

function App() {
  return (
    <div>
      <NavBar/>
      <Welcome/>
      <Skills/>
      <Projects/>
      <Experiences/>
      <AboutMe/>
      <Contact/>
    </div>
  );
}

export default App;