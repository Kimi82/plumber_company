import React, {useState} from 'react';
import './Navbar.css'
import About from '../About/About.js'
function Navbar() {


  return (
<main class="main__wrapper">
  <div className="main__logoBox">HERE WILL BE THE LOGO!</div>
  <span className="main__highHalf">
  <section className="main__section0">
    <div className="main__boxCloseCross">&times;</div>
    <div className="main__boxContent">
      <About/>
    </div>
  </section>

  <section className="main__section1">
  <div className="main__boxCloseCross">&times;</div>
  <div className="main__boxContent">
      USŁUGI
  </div>
  </section>
  </span>

  <span className="main__downHalf">
    
  <section className="main__section2">
  <div className="main__boxCloseCross">&times;</div>
  <div className="main__boxContent">
      Here will be the content
  </div>
  </section>

  <section className="main__section3">
  <div className="main__boxCloseCross">&times;</div>
    <div className="main__boxContent">
      Here will be the content
    </div>  
  </section>
  </span>
</main>
  );
}

export default Navbar;
