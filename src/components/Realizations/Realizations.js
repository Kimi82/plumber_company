import React, { useState, useRef, useEffect, useReducer } from 'react';
import './Realizations.css'
import { gsap, Power1 } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
import CSSRulePlugin from "gsap/CSSRulePlugin"
function Realizations() {

  // useEffect(()=>{
  //   gsap.registerPlugin(ScrollTrigger)
  //   //let wrapper = document.querySelector(".realization__current")
  //   //gsap.from(wrapper, {opacity: 0, scale:2, duration: 4})
  //   let imageReveal = CSSRulePlugin.getRule(".realization:after")
  //   gsap.to(imageReveal,{width:"0%", duration:2, scale: 1.2, ease: Power1.easeInOut, scrollTrigger:{
  //     trigger: "#realizations",
  //     start: 'top 40%',
  //   }})

  // })

  
  const sliderData = [
    {
      title: "Chrysler Building",
      desc: "is an Art Deco skyscraper in the Turtle Bay neighborhood on the East Side of Manhattan, New York City, at the intersection of 42nd Street and Lexington Avenue near Midtown Manhattan. At 1,046 feet (319 m), it is the tallest brick building in the world with a steel framework, and was the world's tallest building for 11 months after its completion in 1930. As of 2019, the Chrysler is the 11th-tallest building in the city, tied with The New York Times Building.",
      image: "https://tvn24.pl/biznes/najnowsze/cdn-zdjeciecb1c9dd8f57963039619a9a056878ae1-budynek-chryslera-zostal-wystawiony-na-sprzedaz-4768114/alternates/SQUARE_1280",
    },
    {
      title: "Lakhta Center",
      desc: "is an 87-story skyscraper built in the northwestern neighborhood of Lakhta in Saint Petersburg, Russia. Standing 462 meters (1,516 ft) tall, it is the tallest building in Russia, the tallest building in Europe, and the fifteenth-tallest building in the world. It is also the second-tallest structure in Russia and Europe, behind the Ostankino Tower in Moscow, in addition to being the second-tallest twisted building and the northernmost skyscraper in the world.",
      image:"https://www.agc-yourglass.com/sites/default/files/styles/header/public/pim_images/46783-LAKHTACENTER_0.jpg?itok=lMWtklMt",
    },
    {
      title: "Palace of Culture and Science",
      desc: "is a notable high-rise building in central Warsaw, Poland. With a total height of 237 metres (778 ft) it is the second tallest building in Poland after Varso, the 5th-tallest building in the European Union (including spire) and one of the tallest on the European continent. Constructed in 1955, it houses various public and cultural institutions such as cinemas, theatres, libraries, sports clubs, university faculties and authorities of the Polish Academy of Sciences. Since 2007 it has been enlisted in the Registry of Objects of Cultural Heritage.",
      image: "https://plusa.net.pl/wp-content/uploads/pkin-00.jpg"
    },
  ]

let currentImgs = []
let nextImgs = []
let currentText = []
let nextText = []

const fade = 1.5


useEffect(()=>{
  currentImgs = gsap.utils.toArray(".realization__currentImage .slide");
  gsap.set(currentImgs[0], {autoAlpha:1})
  gsap.set([currentImgs[1], currentImgs[2]], {autoAlpha:0}) 

  nextImgs = gsap.utils.toArray(".realization__nextImage .slide");
  gsap.set(nextImgs[0], {autoAlpha:1})
  gsap.set([nextImgs[1], nextImgs[2]], {autoAlpha:0})
  
  currentText = gsap.utils.toArray(".realization__currentText .realization__currentTextWrapper");
  gsap.set(currentText[0], {autoAlpha:1})
  gsap.set([currentText[1], currentText[2]], {autoAlpha:0})

  nextText = gsap.utils.toArray(".realization__nextText .realization__nextTextBody");
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
    tl.to(currentImgs[0], {autoAlpha:0, duration:fade},"image")
    tl.to(nextImgs[0], {autoAlpha:0, duration:fade},"image")
    tl.to(currentImgs[2], {autoAlpha:1, duration:fade},"image")
    tl.to(nextImgs[2], {autoAlpha:1, duration:fade},"image")
    
    tl.to(currentText[0], {autoAlpha:0, duration:fade},"image")
    tl.to(nextText[0], {autoAlpha:0, duration:fade},"image")
    tl.to(currentText[2], {autoAlpha:1, duration:fade},"image")
    tl.to(nextText[2], {autoAlpha:1, duration:fade},"image")
    

    currentText.unshift( currentText.slice(2)[0] );
    currentText.pop()
    
    nextText.unshift( nextText.slice(2)[0] )
    nextText.pop()
    
    currentImgs.unshift( currentImgs.slice(2)[0] );
    currentImgs.pop()
    
    nextImgs.unshift( nextImgs.slice(2)[0] )
    nextImgs.pop()
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
            {/* <h3  className="realization__nextTextTitle">NEXT PROJECT</h3> */}
            <h3  className="realization__nextTextBody">{sliderData[0].title}</h3>
          </div>
          
          <div className="realization__nextTextWrapper">
            {/* <h3  className="realization__nextTextTitle">NEXT PROJECT</h3> */}
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