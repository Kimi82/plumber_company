import React, { useRef, useEffect, useState } from 'react';
import './AboutNext.css'

import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {CSSRulePlugin} from "gsap/CSSRulePlugin"


function AboutNext() {  

  useEffect(()=>{
    gsap.registerPlugin(CSSRulePlugin)
    const paragraphColor1 = CSSRulePlugin.getRule(".aboutNext__textWrapper--color1:before"),
    paragraphColor2 = CSSRulePlugin.getRule(".aboutNext__textWrapper--color2:before"),
    wrapper = document.querySelector(".aboutNext"),
    paragraphs = document.querySelectorAll('p'),
    contactButtonColor = CSSRulePlugin.getRule(".navigation__item--block:after")
  
  gsap.registerPlugin(ScrollTrigger);
//    gsap.fromTo(paragraphs, {y: '+=100', opacity: 0}, {y: 0, opacity: 1, stagger: .5, duration: 2, scrollTrigger: {
//      trigger: wrapper,
//      start: 'top 40%',
//      markers: true
//  }})
const tl = gsap.timeline({scrollTrigger: {
       trigger: wrapper,
       start: 'top 40%',
       //markers: true
   }});
tl.fromTo(paragraphs, {y: '+=100', opacity: 0}, {y: 0, opacity: 1, stagger: .5, duration: 1})
  .fromTo(paragraphColor1, {width: 0}, {width: "60%", duration: .5})
  .fromTo(paragraphColor2, {width: 0}, {width: "48%", duration: .5})
},[])

    return (
    <section className="aboutNext slide" id="aboutNext" >
    <div className="aboutNext__textWrapper"> 
      <p>Jesteśmy grupą ludzi która</p>
      <p><span className="aboutNext__textWrapper--color1 color" id="test">buduje</span> domy z pasją i poświeceniem.</p>
      <p>Zbudujemy rowniez Twój</p>
      <p><span className="aboutNext__textWrapper--color2 color" id="test">wymarzony dom!</span></p>
      </div>
    </section>
  );
}

export default AboutNext;