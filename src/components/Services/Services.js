import React, {useState} from 'react';
import './Services.css'
import Card from './Card/Card.js'
function Services() {


  return (
      <section className="services slide" id="services">
        <Card title={"tytuł"} galleryImage={["1", "2", "3"]} details={"details"}/>
     </section>
  );
}

export default Services;
