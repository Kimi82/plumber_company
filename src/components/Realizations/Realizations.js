import React, { useState, useRef, useEffect, useReducer } from 'react';
import './Realizations.css'
import { gsap, Power1 } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
import CSSRulePlugin from "gsap/CSSRulePlugin"
function Realizations() {

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)

    //let wrapper = document.querySelector(".realization__current")
    //gsap.from(wrapper, {opacity: 0, scale:2, duration: 4})
    let imageReveal = CSSRulePlugin.getRule(".realization:after")
    gsap.to(imageReveal,{width:"0%", duration:2, scale: 1.2, ease: Power1.easeInOut, scrollTrigger:{
      trigger: "#realizations",
      start: 'top 40%',
    }})

  })

  
  const sliderData = [
    {
      title: "Gory",
      desc: "to sa gory",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Big_Pine_landscape.jpg",
    },
    {
      title: "Bialy domek",
      desc: "oto bily dom",
      image:"https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
      title: "Czarny blok",
      desc: "Blokowisko czarne",
      image: "https://images.hdqwalls.com/download/sky-building-architecture-light-8k-d8-1920x1080.jpg"
    },
  ]

let currentImgs = []
let nextImgs = []
let currentText = []
let nextText = []

let TcurrentImgs = []
let TnextImgs = []
let TcurrentText = []
let TnextText = []

const next = 1
const fade = 1.5


useEffect(()=>{
  currentImgs = gsap.utils.toArray(".realization__currentImage .slide");
  TcurrentImgs = gsap.utils.toArray(".realization__currentImage .slide").reverse();
  gsap.set(currentImgs[0], {autoAlpha:1})
  gsap.set([currentImgs[1], currentImgs[2]], {autoAlpha:0}) 

  nextImgs = gsap.utils.toArray(".realization__nextImage .slide");
  TnextImgs = gsap.utils.toArray(".realization__nextImage .slide").reverse();
  gsap.set(nextImgs[0], {autoAlpha:1})
  gsap.set([nextImgs[1], nextImgs[2]], {autoAlpha:0})
  
  currentText = gsap.utils.toArray(".realization__currentText .realization__currentTextWrapper");
  TcurrentText = gsap.utils.toArray(".realization__currentText .realization__currentTextWrapper").reverse();
  gsap.set(currentText[0], {autoAlpha:1})
  gsap.set([currentText[1], currentText[2]], {autoAlpha:0})

  nextText = gsap.utils.toArray(".realization__nextText .realization__nextTextBody");
  TnextText = gsap.utils.toArray(".realization__nextText .realization__nextTextBody").reverse();
  gsap.set(nextText[0], {autoAlpha:1})
  gsap.set([nextText[1], nextText[2]], {autoAlpha:0})

})

  

  const nextSlide = () =>{
    const tl = gsap.timeline()
    tl.to(currentImgs[0], {autoAlpha:0, duration:fade},"image")
    tl.to(nextImgs[0], {autoAlpha:0, duration:fade},"image")
    tl.to(currentImgs[1], {autoAlpha:1, duration:fade},"image")
    tl.to(nextImgs[1], {autoAlpha:1, duration:fade},"image")
    
    tl.to(currentText[0], {autoAlpha:0, duration:fade},"image")
    tl.to(nextText[0], {autoAlpha:0, duration:fade},"image")
    tl.to(currentText[1], {autoAlpha:1, duration:fade},"image")
    tl.to(nextText[1], {autoAlpha:1, duration:fade},"image")

    currentText.push( currentText.shift() );
    nextText.push( nextText.shift() )

    currentImgs.push( currentImgs.shift() );
    nextImgs.push( nextImgs.shift() )
  }

  const prevSlide = () => {

    const tl = gsap.timeline()
    tl.to(TcurrentImgs[0], {autoAlpha:0, duration:fade},"image")
    tl.to(TnextImgs[0], {autoAlpha:0, duration:fade},"image")
    tl.to(TcurrentImgs[1], {autoAlpha:1, duration:fade},"image")
    tl.to(TnextImgs[1], {autoAlpha:1, duration:fade},"image")
    
    tl.to(TcurrentText[0], {autoAlpha:0, duration:fade},"image")
    tl.to(TnextText[0], {autoAlpha:0, duration:fade},"image")
    tl.to(TcurrentText[1], {autoAlpha:1, duration:fade},"image")
    tl.to(TnextText[1], {autoAlpha:1, duration:fade},"image")

   // currentText.push( currentText.shift() );
   // nextText.push( nextText.shift() )

   // currentImgs = currentImgs.push(currentImgs.shift())
   // nextImgs = nextImgs.push(nextImgs.shift())
  }


const buttonsValue =[">", "<"]
  return (
      <section className="realization"  id="realizations">
     
        <div className="realization__current">

          <div className="realization__currentText">
            <span className="realization__currentTextWrapper">
              <h1 className="realization__currentTextTitle">{sliderData[2].title}</h1>
              <h3 className="realization__currentTextBody">{sliderData[2].desc}</h3>
            </span>
        
            <span className="realization__currentTextWrapper">
              <h1 className="realization__currentTextTitle">{sliderData[0].title}</h1>
              <h3 className="realization__currentTextBody">{sliderData[0].desc}</h3>
            </span>
            
            <span className="realization__currentTextWrapper">
              <h1 className="realization__currentTextTitle">{sliderData[1].title}</h1>
              <h3 className="realization__currentTextBody">{sliderData[1].desc}</h3>
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
                <h3  className="realization__nextTextBody">{sliderData[0].title}</h3>
              </div>
              
              <div className="realization__nextTextWrapper">
                <h3  className="realization__nextTextTitle">NEXT PROJECT</h3>
                <h3  className="realization__nextTextBody">{sliderData[1].title}</h3>
              </div>
              
              <div className="realization__nextTextWrapper">
                <h3  className="realization__nextTextTitle">NEXT PROJECT</h3>
                <h3  className="realization__nextTextBody">{sliderData[2].title}</h3>
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