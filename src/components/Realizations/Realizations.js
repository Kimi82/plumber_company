import React, { useState, useRef, useEffect, useReducer } from 'react';
import './Realizations.css'
import { gsap, Power1 } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
//import Slider from './Slider/Slider.js'
import CSSRulePlugin from "gsap/CSSRulePlugin"
function Realizations() {

  useEffect(()=>{
    //let wrapper = document.querySelector(".realization__current")
    //gsap.from(wrapper, {opacity: 0, scale:2, duration: 4})
    let imageReveal = CSSRulePlugin.getRule(".realization__current:after")
    gsap.to(imageReveal,{width:"0%", duration:2, scale: 1.2, ease: Power1.easeInOut})
  })

  
  const sliderData = [
    {
      title: "title1",
      desc: "desc1",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Big_Pine_landscape.jpg",
    },
    {
      title: "title2",
      desc: "desc2",
      image:"https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
      title: "title3",
      desc: "desc3",
      image: "https://images.hdqwalls.com/download/sky-building-architecture-light-8k-d8-1920x1080.jpg"
    },
  ]

let currentImgs = []
let nextImgs = []
let currentText = []
let nextText = []

let currentImgsReverse = []
let nextImgsReverse = []
let currentTextReverse = []
let nextTextReverse = []

const next = 1
const fade = 1.5

useEffect(()=>{
  currentImgs = gsap.utils.toArray(".realization__currentImage .slide");
  currentImgsReverse = currentImgs.reverse()
  gsap.set(currentImgs[0], {autoAlpha:1})
  gsap.set([currentImgs[1], currentImgs[2]], {autoAlpha:0}) 

  nextImgs = gsap.utils.toArray(".realization__nextImage .slide");
  nextImgsReverse = nextImgs.reverse()
  gsap.set(nextImgs[0], {autoAlpha:1})
  gsap.set([nextImgs[1], nextImgs[2]], {autoAlpha:0})
  
  currentText = gsap.utils.toArray(".realization__currentText .realization__currentTextWrapper");
  currentTextReverse = currentText.reverse()
  gsap.set(currentText[0], {autoAlpha:1})
  gsap.set([currentText[1], currentText[2]], {autoAlpha:0})

  nextText = gsap.utils.toArray(".realization__nextText .realization__nextTextBody");
  nextTextReverse = nextText.reverse()
  gsap.set(nextText[0], {autoAlpha:1})
  gsap.set([nextText[1], nextText[2]], {autoAlpha:0})
})

  

  const nextSlide = () =>{
    const tl = gsap.timeline()
    tl.to(currentImgs[0], {autoAlpha:0, duration:fade})
    tl.to(nextImgs[0], {autoAlpha:0, duration:fade})
    tl.to(currentImgs[1], {autoAlpha:1, duration:fade},0)
    tl.to(nextImgs[1], {autoAlpha:1, duration:fade},0)
    
    tl.to(currentText[0], {autoAlpha:0, duration:fade})
    tl.to(nextText[0], {autoAlpha:0, duration:fade})
    tl.to(currentText[1], {autoAlpha:1, duration:fade},0)
    tl.to(nextText[1], {autoAlpha:1, duration:fade},0)

    currentText.push( currentText.shift() );
    nextText.push( nextText.shift() )

    currentImgs.push( currentImgs.shift() );
    nextImgs.push( nextImgs.shift() )
  }

  const prevSlide = () => {
    // const tl = gsap.timeline()
    // tl.to(currentImgsReverse[0], {autoAlpha:0, duration:fade})
    // tl.to(nextImgsReverse[0], {autoAlpha:0, duration:fade})
    // tl.to(currentImgsReverse[1], {autoAlpha:1, duration:fade},0)
    // tl.to(nextImgsReverse[1], {autoAlpha:1, duration:fade},0)
    
    // tl.to(currentTextReverse[0], {autoAlpha:0, duration:fade})
    // tl.to(nextTextReverse[0], {autoAlpha:0, duration:fade})
    // tl.to(currentTextReverse[1], {autoAlpha:1, duration:fade},0)
    // tl.to(nextTextReverse[1], {autoAlpha:1, duration:fade},0)

    // currentTextReverse.push( currentTextReverse.shift() );
    // nextTextReverse.push( nextTextReverse.shift() )

    // currentImgsReverse.push( currentImgsReverse.shift() );
    // nextImgsReverse.push( nextImgsReverse.shift() )

}
let container = useRef(null)
let image = useRef(null)

const buttonsValue =[">", "<"]
  return (
      <section className="realization"  id="realizations">
     
        <div className="realization__current" ref={el => image = el}>

          <div className="realization__currentText">
            <span className="realization__currentTextWrapper">
              <h1 className="realization__currentTextTitle">{sliderData[0].title}</h1>
              <h3 className="realization__currentTextBody">{sliderData[0].desc}</h3>
            </span>
        
            <span className="realization__currentTextWrapper">
              <h1 className="realization__currentTextTitle">{sliderData[1].title}</h1>
              <h3 className="realization__currentTextBody">{sliderData[1].desc}</h3>
            </span>
            
            <span className="realization__currentTextWrapper">
              <h1 className="realization__currentTextTitle">{sliderData[2].title}</h1>
              <h3 className="realization__currentTextBody">{sliderData[2].desc}</h3>
            </span>

          </div>
           <div className="realization__currentImageWrapper" >
            <div className="realization__currentImage">
                <img className="slide" src={sliderData[2].image}/>
                <img className="slide" src={sliderData[0].image}/>
                <img className="slide" src={sliderData[1].image}/>
            </div>
           </div> 
        </div>
        
        <div className="realization__next">
          {/* <div className="realization__nextImage">THERE WILL BE NEXT IMAGE</div> */}
          <div className="realization__nextImageWrapper" >
          <div className="realization__nextImage">  
                <img className="slide" src={sliderData[0].image}/>
                <img className="slide" src={sliderData[1].image}/>
                <img className="slide" src={sliderData[2].image}/>
           </div>
          </div>
            <div className="realization__nextText">
              
              <div className="realization__nextTextWrapper">
                <h3  className="realization__nextTextTitle">NEXT PROJECT</h3>
                <h3  className="realization__nextTextBody">{sliderData[2].title}</h3>
              </div>
              
              <div className="realization__nextTextWrapper">
                <h3  className="realization__nextTextTitle">NEXT PROJECT</h3>
                <h3  className="realization__nextTextBody">{sliderData[0].title}</h3>
              </div>
              
              <div className="realization__nextTextWrapper">
                <h3  className="realization__nextTextTitle">NEXT PROJECT</h3>
                <h3  className="realization__nextTextBody">{sliderData[1].title}</h3>
              </div>
              

            </div>
          
          <div className="realization__nextButtons">
            <div className="realization__nextButton realization__nextButton--next" id="nextButtonSlide" onClick={()=>{nextSlide()}}>
              <span className="realization__nextButtonArrow"  >{buttonsValue[0]}</span></div>
            <div className="realization__nextButton realization__nextButton--prev" id="prevButtonSlide" onClick={()=>{prevSlide()}}>
              <span className="realization__nextButtonArrow" >{buttonsValue[1]}</span></div>
          </div>
        </div>
     
     </section>
  );
}

export default Realizations;