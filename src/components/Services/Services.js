import React, {useState} from 'react';
import './Services.css'
//import Card from './Card/Card.js'
function Services() {


  return (
      <section className="services" id="services">
        <div className="services__title">
          <h1>Services</h1>
          <h3>Our roster of talent is ideally positioned to provide creative and strategic
            consultative services for agencies, tech and media startups.
          </h3>
          </div>
          <div className="services__points">
            <span>
            <p>Usluga1</p>
            <p>Usluga2</p>
            <p>Usluga3</p>
            </span>
            <span>
            <p>Usluga4</p>
            <p>Usluga5</p>
            <p>Usluga6</p>
            </span>
            <span>
            <p>Usluga7</p>
            <p>Usluga8</p>
            <p>Usluga9</p>
            </span>
          </div>
      </section>
  );
}

export default Services;
