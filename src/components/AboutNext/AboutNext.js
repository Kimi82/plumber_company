import React, { useRef, useEffect, useState } from 'react';
import './AboutNext.css'

import { gsap } from "gsap";

function useOnScreen(options){
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false)

  useEffect(()=>{
   const observer = new IntersectionObserver(([entry])=>{
     setIsVisible(entry.isIntersecting);
   }, options); 
   if(ref.current){
     observer.observe(ref.current);
   }
   return () =>{
     if(ref.current){
      observer.unobserve(ref.current)
     }
   }
  }
  ,[ref, options])
  return [ref, isVisible]
}


function AboutNext() {  
const [ref, isVisible] = useOnScreen({threshold: 0.3})
  
useEffect(() => {
    const wrapper = document.querySelector(".aboutNext"); //__textWrapper
    const paragraphs = document.querySelectorAll('p');
    console.log(isVisible)
    if(isVisible){
    gsap.fromTo(paragraphs, {y: '+=100', opacity: 0}, {y: 0, opacity: 1, stagger: .5, duration: 1})}    

  }, [isVisible])

      return (
    <section className="aboutNext slide" id="aboutNext" ref={ref}>
    <div className="aboutNext__textWrapper"> 
      <p>Jesteśmy grupą ludzi która</p>
      <p><span className="color">buduje</span> domy z pasją i poświeceniem.</p>
      <p>Zbudujemy rowniez Twój</p>
      <p><span className="color">wymarzony dom!</span></p>
      </div>
    </section>
  );
}

export default AboutNext;
