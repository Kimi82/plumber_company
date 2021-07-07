import React, { useState, useRef, useCallback, useEffect } from 'react';
import './Realizations.css'
import { gsap, Power1 } from "gsap";

function Realizations() {

  const sliderData = [
    {
      title: "title1",
      description: "desc1",
      image: "https://images.adsttc.com/media/images/5ef1/1e6c/b357/658c/7f00/03bf/medium_jpg/131_ACME_005_Marsa_Plaza_Francisco_Nogueira.jpg?1592860233",
    },
    {
      title: "title2",
      description: "desc2",
      image: "zdjeciedodac",
    },
    {
      title: "title3",
      description: "desc3",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Big_Pine_landscape.jpg",
    },
  ]


useEffect(() => {



var slideDelay = 1.5;
var slideDuration = 99999.3;
var snapX;

var slides = document.querySelectorAll(".slide");
var prevButton = document.querySelector("#prev");
var nextButton = document.querySelector("#next");
var progressWrap = gsap.utils.wrap(0, 1);

var numSlides = slides.length;

gsap.set(slides, {
  backgroundColor: "random([red, blue, green, purple, orange, yellow, lime, pink])",
  xPercent: i => i * 100
});

var wrap = gsap.utils.wrap(-100, (numSlides - 1) * 100);
var timer = gsap.delayedCall(slideDelay);

var animation = gsap.to(slides, {
  xPercent: "+=" + (numSlides * 100),
  duration: 1,
  ease: "none",
  paused: true,
  repeat: -1,
  modifiers: {
    xPercent: wrap
  }
});

var proxy = document.createElement("div");
var slideAnimation = gsap.to({}, {});
var slideWidth = 0;
var wrapWidth = 0;
resize();


window.addEventListener("resize", resize);

prevButton.addEventListener("click", function() {
  animateSlides(1);
});

nextButton.addEventListener("click", function() {
  animateSlides(-1);
});

function updateDraggable() {
  timer.restart(true);
  slideAnimation.kill();
  this.update();
}

function animateSlides(direction) {
    
  timer.restart(true);
  slideAnimation.kill();
  
  var x = snapX(gsap.getProperty(proxy, "x") + direction * slideWidth);
  
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
  
  var norm = (gsap.getProperty(proxy, "x") / wrapWidth) || 0;
  
  slideWidth = slides[0].offsetWidth;
  wrapWidth = slideWidth * numSlides;
  snapX = gsap.utils.snap(slideWidth);
  
  gsap.set(proxy, {
    x: norm * wrapWidth
  });
  
  animateSlides(0);
  slideAnimation.progress(1);
}

}, [])
  
 
const buttonsValue =[">", "<"]
  return (
      <section className="realization"  id="realizations">
     
        <div className="realization__current">
          <div className="realization__currentText">
            <h1 className="realization__currentTextTitle">Robota numer1</h1>
            <h3 className="realization__currentTextBody">Tutaj opis tej roboty i tka dalej i tak dalej</h3>
          </div>
           <div className="realization__currentImageWrapper" >
            <div className="realization__currentImage">
            <img className="slide" src={sliderData[0].image}/>
            </div>
           </div> 
        </div>
        
        <div className="realization__next">
          {/* <div className="realization__nextImage">THERE WILL BE NEXT IMAGE</div> */}
          <div className="realization__nextImageWrapper" >
          <div className="realization__nextImage"> 
           <img src={sliderData[2].image}/>
           </div>
          </div>
          <div className="realization__nextText">
            <h3  className="realization__nextTextTitle">NEXT PROJECT</h3>
            <h3  className="realization__nextTextBody">Name Of the Project</h3>
          </div>
          <div className="realization__nextButtons">
            <div className="realization__nextButton realization__nextButton--next">
              <span className="realization__nextButtonArrow" id="next" >{buttonsValue[0]}</span></div>
            <div className="realization__nextButton realization__nextButton--prev">
              <span className="realization__nextButtonArrow" id="prev">{buttonsValue[1]}</span></div>
          </div>
        </div>
     
     </section>
  );
}

export default Realizations;