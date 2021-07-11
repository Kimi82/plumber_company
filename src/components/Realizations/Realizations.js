import React, { useState, useRef, useEffect } from 'react';
import './Realizations.css'
import { gsap, Power1 } from "gsap";
import Slider from './Slider/Slider.js'
function Realizations() {

  const sliderData = [
    {
      title: "title1",
      description: "desc1",
    },
    {
      title: "title2",
      description: "desc2",
    },
    {
      title: "title3",
      description: "desc3",
    },
  ]

  const sliderImageURL = [
-    "https://upload.wikimedia.org/wikipedia/commons/9/95/Big_Pine_landscape.jpg",
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.hdqwalls.com/download/sky-building-architecture-light-8k-d8-1920x1080.jpg"
  ]

  // const sliderImageURL2 = [
  //   "https://upload.wikimedia.org/wikipedia/commons/9/95/Big_Pine_landscape.jpg",
  //   "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  //   "https://images.hdqwalls.com/download/sky-building-architecture-light-8k-d8-1920x1080.jpg",
  //   "https://images.adsttc.com/media/images/5ef1/1e6c/b357/658c/7f00/03bf/medium_jpg/131_ACME_005_Marsa_Plaza_Francisco_Nogueira.jpg?1592860233",
  // ]

  const nextSlide = () =>{

  }

  const prevSlide = () => {
    
  }


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
            {/* <img className="slide" src={sliderData[0].image}/>
            <img className="slide" src={sliderData[0].image}/>
            <img className="slide" src={sliderData[2].image}/> */}
            <Slider sliderImageURL={sliderImageURL}/>
            </div>
           </div> 
        </div>
        
        <div className="realization__next">
          {/* <div className="realization__nextImage">THERE WILL BE NEXT IMAGE</div> */}
          <div className="realization__nextImageWrapper" >
          <div className="realization__nextImage">  
           <img src={sliderData[0].image}/>
           <img src={sliderData[1].image}/>
           <img src={sliderData[2].image}/>
           </div>
          </div>
          <div className="realization__nextText">
            <h3  className="realization__nextTextTitle">NEXT PROJECT</h3>
            <h3  className="realization__nextTextBody">Name Of the Project</h3>
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