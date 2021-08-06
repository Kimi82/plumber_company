import React, {useEffect, useState} from 'react';
import './Contact.css'
import {gsap} from "gsap"
import ScrollTrigger from 'gsap/ScrollTrigger'
import CSSRulePlugin from "gsap/CSSRulePlugin"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import emailjs from "emailjs-com"

import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';

function Contact() {

   const [succesAlert, setSuccesAlert] = useState({isOpen: false, content:""})
   const [errorAlert, setErrorAlert] = useState({isOpen: false, content:""})

  const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

  const schema = yup.object().shape({
    name: yup.string().required("!Please add Your Name!"),
    number: yup.string().matches(phoneRegExp, "!Please add corect phone number!")
  })
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data, e) => {
    e.preventDefault()
   emailjs.sendForm('service_bsodg19', 'template_6p5fcid', "#contactForm", 'user_JEj1Xj1UnjxsOpuY1sK7s')
   .then((result) => {
       console.log(result.text);
       setSuccesAlert({isOpen: true, content: "Email was sent."})
   }, (error) => {
       console.log(error.text);
       setErrorAlert({isOpen: true, content: "Email could not be sent, please try again"})
   });
   
   
  };


  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    const contactForm = document.querySelector(".contact__form")
    const contactSubmit = document.querySelector(".contact__submit")
    const navigationAdditional = CSSRulePlugin.getRule(".navigation a:after")
    const tl = gsap.timeline({scrollTrigger: {
      trigger: "#contact",
      start: 'top 20%',
  }});
    tl.to("#contact", {backgroundColor: "white", duration:2, ease:'easeInOut'})
    //tl.to(".navigation a", {color: "black"})
    //tl.to(navigationAdditional, {backgroundColor: "black"})
    tl.fromTo(".contact__header", {y: '+=100', opacity: 0}, {y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'easeInOut'});
    tl.fromTo(contactForm.children, {y: '+=100', opacity: 0}, {y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'easeInOut'},'label');
    tl.fromTo(contactSubmit.children, {y: '+=100', opacity: 0}, {y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'easeInOut'},'label');  
    tl.fromTo(".contact__submitButton", {
      boxShadow: "0 0 0 0px rgba(45, 230, 54, 0.4)",  
    }, {
      boxShadow: "0 0 0 20px rgba(45, 230, 54, 0)",
      repeat: -1,
      duration: 1.3
    });
   },[])



  return (

      <section className="contact" id="contact">

  {succesAlert.isOpen && <Alert severity="success" variant="filled" onClose={() => {setSuccesAlert({isOpen: false, content: ""})}}>{succesAlert.content}</Alert>}
  {errorAlert.isOpen && <Alert severity="error" variant="filled" onClose={() => {setErrorAlert({isOpen: false, content: ""})}}>{errorAlert.content}</Alert>}


      <h1 className="contact__header">Let's start a conversation</h1>
        <form onSubmit={handleSubmit(onSubmit)} id="contactForm">
          <div className="contact__form">
          <div className="contact__formPart">
          <label className="contact__formPartLabel" htmlFor="name">My name is:</label>
          <input className={`contact__formPartInput${errors.name ? '--noValid' : '--valid'}`} type="text" name="name" {...register("name")}/>
          <h4 className="contact__formPartErrorMessage">{errors.name && errors.name.message}</h4>
          </div>
          <div className="contact__formPart">
          <label className="contact__formPartLabel" htmlFor="number">My phone numer is:</label>
          <input className={`contact__formPartInput${errors.number ? '--noValid' : '--valid'}`} type="text" name="number" maxLength="16" {...register("number")}/>
          <h4 className="contact__formPartErrorMessage">{errors.number && errors.number.message}</h4> 
          </div>
          <div className="contact__formPart">
           <label className="contact__formPartLabel" htmlFor="selectTopic">And i want to talk about:</label>
          {/*<input className="contact__formPartInput" type="text" name="topic"{...register("topic")}/> */}
          <div className="select">
            <select name="selectTopic" {...register("topic")}>
              <option defaultValue disabled>:)</option>
              <option value="Usluga1">Usluga1</option>
              <option value="Usluga2">Usluga2</option>
              <option value="Usluga3">Usluga3</option>
              <option value="Usluga4">Usluga4</option>
              <option value="Usluga5">Usluga5</option>
             </select>
          </div>




          </div>
          </div>
          <div className="contact__submit">
            <h3 className="contact__submitTitle">Send</h3>
            <button type="submit" className="contact__submitButton"><i className="contact__submitButtonArrow"/></button>          
          </div>
        </form>
     </section>
  );
}

export default Contact;
