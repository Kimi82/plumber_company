import React, {useState} from 'react';
import './Card.css'
function Card({title, galleryImage, details}) {



  return (
      <section className="card">
        <div className="card__title">{title}</div>
        

        <div className="card__gallery">
          <div className="slides">
            <div className="slides__item">JEDEN</div>
            <div className="slides__item" id="dwa">DWA</div>
            <div className="slides__item" id="trzy">TRZY</div>
          </div>
          <div className="button">
            <button>prev</button>
            <button>next</button>
          </div>
        </div>

        
        <div className="card__opinion">3</div>
     </section>
  );
}

export default Card;
