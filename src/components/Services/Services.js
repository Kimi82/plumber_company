import React, {useState} from 'react';
import './Services.css'
import Card from './Card/Card.js'
function Services() {


  return (
      <section className="services slide" id="services">
        
        <Card title={"tytuł"} galleryImage={["1", "2", "7"]} details={"details1"}/>
        <Card title={"tytuł2"} galleryImage={["3", "4", "2"]} details={"details2"}/>
        <Card title={"tytuł3"} galleryImage={["2", "5", "1"]} details={"details3"}/>

     </section>
  );
}

export default Services;
