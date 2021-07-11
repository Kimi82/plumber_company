
import React, { useState, useRef, useCallback, useEffect } from 'react';
import './Slider.css'
import { gsap, Power1 } from "gsap";
import { Draggable } from "gsap/all";


export default function Slider({sliderImageURL}) {




useEffect(()=>{
    
const slideDelay = 1.5;
const slideDuration = 0.5;
let snapX;

const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector("#prevButtonSlide");
const nextButton = document.querySelector("#nextButtonSlide");
const progressWrap = gsap.utils.wrap(0, 1);
const numSlides = slides.length;

gsap.set(slides, {
  xPercent: i => i * 100
});

const wrap = gsap.utils.wrap(-100, (numSlides - 1) * 100);
const timer = gsap.delayedCall(slideDelay);

const animation = gsap.to(slides, {
  xPercent: "+=" + (numSlides * 100),
  duration: 1,
  ease: "none",
  paused: true,
  repeat: -1,
  modifiers: {
    xPercent: wrap
  }
});

const proxy = document.createElement("div");
let slideAnimation = gsap.to({}, {});
let slideWidth = 0;
let wrapWidth = 0;
resize();



window.addEventListener("resize", resize);

prevButton.addEventListener("click", () => {
  animateSlides(1);
});

nextButton.addEventListener("click", () => {
  animateSlides(-1);
});

// function updateDraggable() {
//   timer.restart(true);
//   slideAnimation.kill();
//   this.update();
// }

function animateSlides(direction) {
    
  timer.restart(true);
  slideAnimation.kill();
  
  const x = snapX(gsap.getProperty(proxy, "x") + direction * slideWidth);
  
  slideAnimation = gsap.to(proxy, {
    x: x,
    duration: slideDuration,
    
    onUpdate: updateProgress
  });  
}



function updateProgress() { 
  animation.progress(progressWrap(gsap.getProperty(proxy, "x") / wrapWidth));
}

function resize() {
  
  const norm = (gsap.getProperty(proxy, "x") / wrapWidth) || 0;
  
  slideWidth = slides[0].offsetWidth;
  wrapWidth = slideWidth * numSlides;
  snapX = gsap.utils.snap(slideWidth);
  
  gsap.set(proxy, {
    x: norm * wrapWidth
  });
  
  animateSlides(0);
  slideAnimation.progress(1);
}


     })

    return (
        
  <main>
     <div className="slides-container">
       <div className="slides-inner">
       {sliderImageURL.map((image) => (
          <div className="slide"><img src={image} className="test2"/></div>
        ))}
      </div>
   </div>
 </main>
    )
}
