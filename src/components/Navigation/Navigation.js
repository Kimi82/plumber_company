import React, {useState, useEffect, useRef} from 'react';
import './Navigation.css'
import logo from '../static/logo.png'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



function Navigation() {

  




const [activeDot, setActiveDot] = useState("about");

  return (
<section className="navigation__wrapper">
{/* <a href="/" className="navigation__logo">
<img src={logo}/>
  <h2>YOURNAME</h2></a> */}

<ul className="navigation__list">
<li onClick={()=>setActiveDot("about")}><a href="#about" ><span>O Nas</span><div className="dot"/></a></li>
<li onClick={()=>setActiveDot("services")}><a href="#services"><span>Usługi</span><div className="dot"/></a></li>
<li onClick={()=>setActiveDot("realizations")}><a href="#realizations"><span>Realizacje</span><div className="dot-active"/></a></li>
<li onClick={()=>setActiveDot("contact")}><a href="#contact"><span>Kontakt</span><div className="dot"/></a></li>
</ul>
</section> 
    
  );
}

export default Navigation;