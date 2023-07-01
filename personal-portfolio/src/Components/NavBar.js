import { useRef } from "react";
import "./NavBar.css";

function NavBar() {
  const navRef = useRef();
  const hamburgerRef = useRef();
  const navMenuRef = useRef();


  function showHamburger() {
    navRef.current.classList.toggle("active")
    hamburgerRef.current.classList.toggle("active")
    navMenuRef.current.classList.toggle("active")
  }

  function hideNavMenu() {
    navMenuRef.current.classList.toggle("active")
    navRef.current.classList.toggle("active")
    hamburgerRef.current.classList.toggle("active")
  }

  return (

    <nav ref={navRef} className="container-navbar">
      <div className="container-logo">
        <div className="navbar-name"><span className="navbar-initial">J</span>akob <span className="navbar-initial">S</span>havinski</div>
      </div>

      <div>
        <ul ref={navMenuRef} className="nav-menu">
          <div>
            <li className="nav-item"><a href="#home" className="nav-link" onClick={hideNavMenu}>Home</a></li>
            <span className="nav-underline"></span>
          </div>
          <li className="nav-item"><a href="#aboutme" className="nav-link" onClick={hideNavMenu}>About Me</a></li>
          <li className="nav-item"><a href="#projects" className="nav-link" onClick={hideNavMenu}>Projects</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link" onClick={hideNavMenu}>Contact</a></li>
        </ul>
        <div ref={hamburgerRef} className="hamburger" onClick={showHamburger}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

    </nav>
  );
}

export default NavBar;
