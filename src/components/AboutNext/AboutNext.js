import React from 'react';
import './AboutNext.css'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const wrapper = document.querySelector(".aboutNext__textWrapper");
const paragraphs = document.querySelectorAll('p')
console.log(wrapper)

gsap.fromTo(paragraphs, {y: '+=100', opacity: 0}, {y: 0, opacity: 1, stagger: .5, duration: 2, scrollTrigger: {
    trigger: wrapper,
    start: 'top 20%',
    markers: true
}})

function AboutNext() {

    return (
    <section className="aboutNext slide" id="aboutNext">
    <div className="aboutNext__textWrapper"> 
      <p>Jesteśmy grupą ludzi która</p>
      <p><span className="color">buduje</span> domy z pasją i poświeceniem.</p>
      <p>Zbudujemy rowniez Twoj</p>
      <p><span className="color">wymarzony dom!</span></p>
      </div>
    </section>
  );
}

export default AboutNext;
