import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    
//navbarLinks.classList.toggle('active')}
  const navbarLinks = ""
  return (
    <nav className="navbar">
      <div className="navbar__logo">xdd</div>
      <a className="navbar__hamburger" onClick={() => {setMenuOpen(!menuOpen)}}>
        <span className="bar"> </span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className="navbar__links" style={{display: menuOpen ? 'block' : 'none'}}>
        <ul>
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>noNiewme</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
