import React, {useState, useRef} from 'react';
import './Navigation.css'
import logo from '../static/logo.png'


function Navigation() {
    

  
  return (
<div className="navigation__wrapper">
<a href="/" className="navigation__logo">
<img src={logo}/>
  <h2>YOURNAME</h2></a>

<ul className="navigation__list">
<li><h1><a href="#about">O Nas</a></h1></li>
<li><h1><a href="#services">Usługi</a></h1></li>
<li><h1><a href="#realizations">Realizacje</a></h1></li>
<li><h1><a href="#contact">Kontakt</a></h1></li>
</ul>
</div> 
    
  );
}

export default Navigation;