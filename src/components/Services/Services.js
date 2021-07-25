import React, {useEffect} from 'react';
import './Services.css'
import { gsap, Power1 } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
import CSSRulePlugin from "gsap/CSSRulePlugin"
//import Card from './Card/Card.js'
function Services() {

  // useEffect(()=>{
  //      const paragraphs = document.querySelectorAll(".services__points p")
    
  //      //gsap.fromTo(paragraphs, {y: '+=100', scale:.7, opacity: 0}, {y: 0, scale:1, opacity: 1, stagger: .5, duration: 1})
  //   })

  //   useEffect(()=>{
  //     gsap.registerPlugin(ScrollTrigger)
  
  //     //let wrapper = document.querySelector(".realization__current")
  //     //gsap.from(wrapper, {opacity: 0, scale:2, duration: 4})
  //     let imageReveal = CSSRulePlugin.getRule(".services h1:after")
  //     gsap.to(imageReveal,{height:"0%", duration:2, scale: 1.2, ease: Power1.easeInOut, scrollTrigger:{
  //       trigger: "#services",
  //       start: 'top 40%',
  //     }})
  
  //   })



  return (
      <section className="services" id="services">
        <div className="services__title">
          <h1>Services</h1>
          <h3>Our roster of talent is ideally positioned to provide creative and strategic
            consultative services for agencies, tech and media startups.
          </h3>
          </div>
          <div className="services__points">
            <span>
            <p>Usluga1</p>
            <p>Usluga2</p>
            <p>Usluga3</p>
            </span>
            <span>
            <p>Usluga4</p>
            <p>Usluga5</p>
            <p>Usluga6</p>
            </span>
            <span>
            <p>Usluga7</p>
            <p>Usluga8</p>
            <p>Usluga9</p>
            </span>
          </div>
      </section>
  );
}

export default Services;
