import React, {useEffect} from 'react';
import './About.css'
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";


function About() {
const randomTitlePhoto = () => {
  const photos = [
    "https://assets.webiconspng.com/uploads/2017/09/Industrail-Workers-And-Engineers-PNG-Image-29045.png",
    "http://tomasan.pl/wp-content/uploads/2015/11/builder-header.png",
    "https://pngimg.com/uploads/industrial_worker/industrial_worker_PNG11414.png",
    "http://dudmet.com.pl/wp-content/uploads/revslider/FullWidth/builder-man2.png"
  ]
   const result = Math.floor(Math.random() * 4);
  
  return photos[result]
}



  return (
    <section className="about__wrapper" id="about"> 
      <div className="about__photo">
        <img src={randomTitlePhoto()}/>
        </div>
      <div className="about__title"><h1>WE ARE PROFESSIONALS,<br/> WE CAN BE THEM<br/> FOR YOU TOO</h1></div>

      <div className="about__buttonWrapper">
        <span className="about_progressBar"><div className="about__progressBar--value"></div></span>
        <div className="about__button">ABOUT US</div>
      </div>

    </section>
  );
}

export default About;
