import React, {useState} from 'react';
import './About.css'


function About() {
const randomTitlePhoto = () => {
  const photos = [
    "https://assets.webiconspng.com/uploads/2017/09/Industrail-Workers-And-Engineers-PNG-Image-29045.png",
    "https://i.dlpng.com/static/png/223403_preview.png",
    "http://tomasan.pl/wp-content/uploads/2015/11/builder-header.png",
    "https://pngimg.com/uploads/industrial_worker/industrial_worker_PNG11414.png",
    "http://dudmet.com.pl/wp-content/uploads/revslider/FullWidth/builder-man2.png"
  ]
   const result = Math.floor(Math.random() * 5);
  
  return photos[result]
}



  return (
    <div className="about__wrapper"> 
      <img src={randomTitlePhoto()}/>
      <div className="about__title"><h1>JESTEŚMY FACHOWCAMI,<br/> MOŻEMY BYĆ NIMI<br/> I DLA CIEBIE</h1></div>
    </div>
  );
}

export default About;
