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
    paragraphs = document.querySelectorAll('.aboutNext__textWrapper p'),
    contactButtonColor = CSSRulePlugin.getRule(".navigation__item--block:after")
  gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({scrollTrigger: {
       trigger: wrapper,
       start: 'top 40%',
       //markers: true
   }});
tl.fromTo(paragraphs, {y: '+=100', opacity: 0}, {y: 0, opacity: 1, stagger: .5, duration: 1})
  .fromTo(paragraphColor1, {width: 0}, {width: "101%", duration: .5})
  .fromTo(paragraphColor2, {width: 0}, {width: "101%", duration: .5})
},[])

    return (
    <section className="aboutNext" id="aboutNext" >
    <div className="aboutNext__textWrapper"> 
      <p>We are a group of people that</p>
      <p><span className="aboutNext__textWrapper--color1">builds houses</span>with passion </p>
      <p>We will also build yours</p>
      <p><span className="aboutNext__textWrapper--color2">dream house!</span></p>
      </div>
    </section>
  );
}

export default AboutNext;