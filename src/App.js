import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Cursos from './components/cursos/Cursos';
import Projects from './components/projects/Projects';
import Theme from './components/theme/Theme';


const App = () => {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Cursos />
      <Services />
      <Projects />
      <Contact />
    </main>

    <Footer />
    <ScrollUp />
    </>
  )
}

export default App;
