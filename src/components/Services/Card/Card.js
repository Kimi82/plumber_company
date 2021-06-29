import React, {useEffect, useState} from 'react';
import './Card.css'
import { gsap, TweenLite } from "gsap";

function Card({title, galleryImage, details}) {

const [slides, setSlides] = useState([])


useEffect(() => {
  const slideDiv = document.querySelector(".slides")
  setSlides(slideDiv);
}, [])
 
var index = 0,
    offset = 0

const nextSlide = () => {
  if(offset ===  -(slides.children.length-1)*slides.children[0].clientWidth) return;
    offset -= slides.children[0].clientWidth;
    index ++;
    gsap.to(".slides", 0.6, {x : offset})
}

const prevSlide = () => {
  if(offset === 0) return;
    offset += slides.children[0].clientWidth;
    index--;
    gsap.to(".slides", 0.6, {x : offset})
  }


  return (
    <section className="card">
        <div className="card__title">{title}</div>
        <div className="card__gallery">
          <div className="slides">
            <div className="slides__item">JEDEN</div>
            <div className="slides__item">DWA</div>
            <div className="slides__item">TRZY</div>
          </div>
          <div className="button">
            <button onClick={()=>{prevSlide()}}>prev</button>
            <button onClick={()=>{nextSlide()}}>next</button>
          </div>
        </div>

        
        <div className="card__opinion">3</div>
     </section>
     
  );
}

export default Card;