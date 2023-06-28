import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Home />
      <AboutMe /> 
      <Skills />
    </div>
  );
}

export default App;
