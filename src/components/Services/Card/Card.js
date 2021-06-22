import React, {useEffect, useState} from 'react';
import './Card.css'
import { gsap } from "gsap";

function Card({title, galleryImage, details}) {

const [slides, setSlides] = useState([])
const [currentSlide, setCurrentSlide] = useState(0)
useEffect(() => {
  const slides = document.querySelectorAll(".slides__item")
  console.log(slides)
  let helperArray = [];
  Object.keys(slides).map(function(key, index) {
    helperArray.push(slides[index])
  });
  setSlides(helperArray)
}, [])
//console.log(slides)

const nextSlide = () => {
  let helperArray = [...slides, ...slides, ...slides, ...slides]
  if(currentSlide <= helperArray.length){ 
  setCurrentSlide(currentSlide+1)
  gsap.fromTo(helperArray[currentSlide], {opacity: 1}, {opacity: 0, duration: 1});
}
}

const prevSlide = () => {
  let helperArray = [...slides, ...slides, ...slides, ...slides]
  if(currentSlide > 0){
    setCurrentSlide(currentSlide-1)
    gsap.fromTo(helperArray[currentSlide], {opacity: 0}, {opacity: 1, duration: 1});
  }
  }
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
