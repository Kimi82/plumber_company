import React, {useEffect} from 'react';
import './Services.css'
import { gsap, Power1 } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
import CSSRulePlugin from "gsap/CSSRulePlugin"
//import Card from './Card/Card.js'
function Services() {


     useEffect(()=>{
       gsap.registerPlugin(ScrollTrigger)
       const paragraphsUnderline = CSSRulePlugin.getRule(".services__points p:after")
      
       const tl = gsap.timeline({scrollTrigger:{
        trigger: "#services",
        start: 'top 25%',
     }})

     tl.to(".services__title h1", {color:"white", duration:2})
     //tl.fromTo(".services__title h2",{opacity:0, scale:.9},{opacity:1, scale:1.5, duration:.8})
     tl.fromTo(".services__points p", {y: '+=100', scale:.9, opacity: 0}, {y: 0, scale:1, opacity: 1, stagger: .2, duration: .7})
     tl.fromTo(paragraphsUnderline, {width: 0}, {width:"80%", stagger: 1, duration: 1, ease: 'easeInOut'}) 
     
     })



  return (
      <section className="services" id="services">
        <div className="services__title">
          <h1>Services</h1>
          {/* <h2>Our company offers a wide range of services at the highest level</h2> */}
          </div>
          <div className="services__points">
            <span>
            <p>Gas installations</p>
            <p>Water installations</p>
            <p>Central heating installations</p>
            </span>
            <span>
            <p>Houses from scratch</p>
            <p>Renovations</p>
            <p>Demolitions</p>
            </span>
            <span>
            <p>Heat pumps</p>
            <p>Photovoltaics</p>
            <p>Solar heating</p>
            </span>
          </div>
      </section>
  );
}

export default Services;
