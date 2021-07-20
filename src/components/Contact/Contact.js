import React, {useState} from 'react';
import './Contact.css'
function Contact() {


  return (
      <section className="contact" id="contact">
        <h1 className="contact__header">Let's start a conversation</h1>
        <form>
          <div className="contact__form">
          <div className="contact__formPart">
          <label className="contact__formPartLabel" for="name">My name is:</label>
          <input className="contact__formPartInput" type="text" id="name" name="name"/>
          </div>

          <div className="contact__formPart">
          <label className="contact__formPartLabel" for="number">My phone numer is:</label>
          <input className="contact__formPartInput" type="number" id="number" name="number"/>
          </div>

          <div className="contact__formPart">
          <label className="contact__formPartLabel" for="topic">And i want to talk about:</label>
          <input className="contact__formPartInput" type="text" id="topic" name="topic"/>
          </div>
          </div>
          <div className="contact__submit">
            <h3 className="contact__submitTitle">Send</h3>
            <button class="contact__submitButton">XDD</button>          
          </div>
        </form>
     </section>
  );
}

export default Contact;
