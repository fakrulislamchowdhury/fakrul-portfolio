import './App.css';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Projects from './Pages/Projects/Projects';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Education from './Pages/Education/Education';
import Certification from './Pages/Certification/Certification';
import Skills from './Pages/Skills/Skills';
import Resume from './Pages/Resume/Resume';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/education'>
          <Education />
        </Route>
        <Route path='/certification'>
          <Certification />
        </Route>
        <Route path='/skills'>
          <Skills />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/resume'>
          <Resume />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
