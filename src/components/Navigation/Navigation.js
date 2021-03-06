import React from 'react';
import './Navigation.css'


function Navigation() {

  return (
<ul className="navigation">
<li><a href="#about" className="navigation__item">About</a></li>
<li><a href="#realizations" className="navigation__item">Realizations</a></li>
<li><a href="#services" className="navigation__item">Services</a></li>
<li><a href="#contact" className="navigation__item--block" id="navigation__item--color">Contact</a></li>
</ul>  
  );
}

export default Navigation;

