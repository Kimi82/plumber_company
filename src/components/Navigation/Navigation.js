import React, {useState, useEffect, useRef} from 'react';
import './Navigation.css'
import logo from '../static/logo.png'
import { gsap } from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
//import { TweenLite } from "gsap";



function Navigation() {


// const logit = () =>{
// const sections = document.getElementsByClassName("panel");
// //for(let i=0; i<=sections.length; i++){
//   const messageText = isInViewport(sections[2]) ?
//         alert("JEST") :
//         console.log("nie");


// //}
// }

// function isInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   return (
//       rect.top >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
//   );
// }


// useEffect(() => {
//   function watchScroll() {
//     let container = document.getElementsByClassName("main__wrapper")
//     container[0].addEventListener("scroll", logit);
//   }
//   watchScroll();
//   return () => {
//     window.removeEventListener("scroll", logit);
//   };
// });

gsap.registerPlugin(ScrollTrigger);

function goToSection(i, anim) {
  console.log(i)
  gsap.to(window, {
    scrollTo: {y: i.innerHeight, autoKill: false},
    duration: 1
  });
  
  if(anim) {
    anim.restart();
  }
}

gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    onEnter: () => goToSection(i)
  });
  
  ScrollTrigger.create({
    trigger: panel,
    start: "bottom bottom",
    onEnterBack: () => goToSection(i),
  });
});


  return (

<nav className="navigation">
  
  {/* <a href="/" className="navigation__logo">
<img src={logo}/>
  <h2>YOURNAME</h2></a> */}

<a href="#about">
  <div className="navigation__tooltipWrapper">
      <span className="navigation__tooltipText">About</span> 
      <div className="navigation__dotWrapper"> 
      <div className="navigation__dot"></div>
      </div>
  </div> 
  </a> 

  <a href="#services">
  <div className="navigation__tooltipWrapper">
      <span className="navigation__tooltipText">Services</span> 
      <div className="navigation__dotWrapper">
      <div className="navigation__dot"></div>
      </div>
  </div> 
  </a> 

  <a href="#realizations">
  <div className="navigation__tooltipWrapper">
      <span className="navigation__tooltipText">Realizations</span>
      <div className="navigation__dotWrapper"> 
      <div className="navigation__dot"></div>
      </div>
  </div> 
  </a> 

  <a href="#contact">
  <div className="navigation__tooltipWrapper">
      <span className="navigation__tooltipText">Contact</span>
      <div className="navigation__dotWrapper"> 
      <div className="navigation__dot"></div>
      </div>
  </div> 
  </a> 
</nav> 
    
  );
}

export default Navigation;