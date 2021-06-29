import React, {useEffect, useState} from 'react';
import './Card.css'
import { gsap, TweenLite } from "gsap";

function Card({title, galleryImage, details}) {

const [slides, setSlides] = useState([])
const [currentSlide, setCurrentSlide] = useState(1)

useEffect(() => {
  const slideDiv = document.querySelector(".slides")
  // const slides = document.querySelectorAll(".slides__item")
  // console.log(slides)
  // let helperArray = [];
  // Object.keys(slides).map(function(key, index) {
  //   helperArray.push(slides[index])
  // });
  setSlides(slideDiv);
}, [])
//console.log(slides)

const nextSlide = () => {
  if(currentSlide <= 0 || currentSlide > slides.children.length-1 ) return; 
  setCurrentSlide(currentSlide+1)
  TweenLite.to(".slides", 1, {x:(-slides.children[0].clientWidth * currentSlide-1)+"px"});
}


const prevSlide = () => {
  // let helperArray = [...slides, ...slides, ...slides, ...slides]
  // if(currentSlide > 0){
  //   setCurrentSlide(currentSlide-1)
  if(currentSlide <= 1) return;
  setCurrentSlide(currentSlide-1)
  TweenLite.to(".slides", 1, {x:(slides.children[0].clientWidth * currentSlide+1)+"px"});
  }
  //}

console.log(currentSlide)
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