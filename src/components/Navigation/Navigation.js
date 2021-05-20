import React, {useState} from 'react';
import './Navigation.css'
import logo from '../static/logo.png'


function Navigation() {

  return (
    
<div className="navigation__wrapper">
<a className="navigation__logo">
<img src={logo}/>
  <h2>YOURNAME</h2></a>

<ul className="navigation__list">
<li><h1>O Nas</h1></li>
<li><h1>Usługi</h1></li>
<li><h1>Realizacje</h1></li>
<li><h1>Kontakt</h1></li>
</ul>
</div> 
    
  );
}

export default Navigation;
