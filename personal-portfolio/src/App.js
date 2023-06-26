import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Home />
      <AboutMe /> 
    </div>
  );
}

export default App;
