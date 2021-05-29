import React, {useState, useEffect, useRef} from 'react';
import './Navigation.css'
import logo from '../static/logo.png'
import { gsap } from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
//import { TweenLite } from "gsap";



function Navigation() {


  return (
<section className="navigation">
{/* <a href="/" className="navigation__logo">
<img src={logo}/>
  <h2>YOURNAME</h2></a> */}


<a href="#about">
  <div className="navigation__tooltip">
    <div className="navigation__dot">
      <span className="navigation__tooltipText">About</span>
  </div></div></a>

<a href="#services">
  <div className="navigation__tooltip">
    <div className="navigation__dot">
      <span className="navigation__tooltipText">Services</span>
  </div></div></a>

<a href="#realizations">
  <div className="navigation__tooltip">
    <div className="navigation__dot">
      <span className="navigation__tooltipText">Realizations</span>
  </div></div></a>

<a href="#contact">
  <div className="navigation__tooltip">
    <div className="navigation__dot">
      <span className="navigation__tooltipText">About</span>
    </div></div></a>
</section> 
    
  );
}

export default Navigation;