import React, {useEffect} from 'react';
import './Services.css'
import { gsap, Power1 } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
import CSSRulePlugin from "gsap/CSSRulePlugin"
//import Card from './Card/Card.js'
function Services() {

  useEffect(()=>{
       
      
      })

     useEffect(()=>{
       gsap.registerPlugin(ScrollTrigger)
       const paragraphsUnderline = CSSRulePlugin.getRule(".services__points p:after")
     
       const tl = gsap.timeline({scrollTrigger:{
        trigger: "#services",
        start: 'top 25%',
     }})

     tl.to(".services__title h1", {color:"white", duration:3})
     tl.fromTo(".services__title h3",{opacity:0, scale:.9},{opacity:1, scale:1, duration:.8})
     tl.fromTo(".services__points p", {y: '+=100', scale:.9, opacity: 0}, {y: 0, scale:1, opacity: 1, stagger: .2, duration: .7})
     tl.fromTo(paragraphsUnderline, {width: 0}, {width:"80%", stagger: 1, duration: 1, ease: 'easeInOut'}) 
     
     })



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
