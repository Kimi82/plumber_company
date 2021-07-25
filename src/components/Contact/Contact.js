import React, {useEffect} from 'react';
import './Contact.css'
import {gsap, Power1} from "gsap"
import ScrollTrigger from 'gsap/ScrollTrigger'

function Contact() {

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    const contactForm = document.querySelector(".contact__form")
    const contactSubmit = document.querySelector(".contact__submit")
    const tl = gsap.timeline({scrollTrigger: {
      trigger: "#contact",
      start: 'top 40%',
  }});
    tl.to("#contact", {backgroundColor: "white", duration:2, ease:'easeInOut'})
    tl.fromTo(".contact__header", {y: '+=100', opacity: 0}, {y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'easeInOut'});
    tl.fromTo(contactForm.children, {y: '+=100', opacity: 0}, {y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'easeInOut'},'label');
    tl.fromTo(contactSubmit.children, {y: '+=100', opacity: 0}, {y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'easeInOut'},'label');  
  })



  return (

      <section className="contact" id="contact">
       
        <h1 className="contact__header">Let's start a conversation</h1>
        <form>
          <div className="contact__form">
          <div className="contact__formPart">
          <label className="contact__formPartLabel" htmlFor="name">My name is:</label>
          <input className="contact__formPartInput" type="text" id="name" name="name"/>
          </div>

          <div className="contact__formPart">
          <label className="contact__formPartLabel" htmlFor="number">My phone numer is:</label>
          <input className="contact__formPartInput" type="number" id="number" name="number"/>
          </div>

          <div className="contact__formPart">
          <label className="contact__formPartLabel" htmlFor="topic">And i want to talk about:</label>
          <input className="contact__formPartInput" type="text" id="topic" name="topic"/>
          </div>
          </div>
          <div className="contact__submit">
            <h3 className="contact__submitTitle">Send</h3>
            <button className="contact__submitButton">XDD</button>          
          </div>
        </form>
     </section>
  );
}

export default Contact;
