import { useRef } from "react";
import "./NavBar.css";

function NavBar() {
  const navRef = useRef();
  const hamburgerRef = useRef();
  const navMenuRef = useRef();

  function showHamburger() {
    console.log('clicked');
    navRef.current.classList.toggle("active")
    hamburgerRef.current.classList.toggle("active")
    navMenuRef.current.classList.toggle("active")
  }

  return (
    <header>
      <nav ref={navRef} className="navbar">

        <div className="jakob-logo">
          <div className="circle"></div>
          <div className="ring"></div>
          <div className="ring-2"></div>
          <div className="js">
            <h1>JS</h1>
          </div>
        </div>

        <div class="name">
          <div class="first-name">
            <span class="jakob">J</span>
            <span class="jakob">A</span>
            <span class="jakob">K</span>
            <span class="jakob">O</span>
            <span class="jakob">B</span>
          </div>
          <div class="last-name">SHAVINSKI</div>
        </div>

        <div>
          <ul ref={navMenuRef} className="nav-menu">
            <li className="nav-item"><a href="#header" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#about" className="nav-link">About Me</a></li>
            <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
            <li className="nav-item"><a href="#resume" className="nav-link">Resume</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
          </ul>

          <div ref={hamburgerRef} className="hamburger" onClick={showHamburger}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>

      </nav>
    </header >
  );
}

export default NavBar;
