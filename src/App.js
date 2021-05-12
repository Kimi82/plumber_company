import React, {useState} from 'react';
import './App.css'
import About from './components/About/About.js'
function App() {

 const expandSection = (e) => {
   e.target.parentNode.classList.add("expand")
   e.target.parentNode.children[0].style.opacity = 1
  }

  const closeSection = (e) =>{
    e.target.parentNode.classList.remove("expand")
    e.target.parentNode.children[0].style.opacity = 0
    console.log("DZIALA")
  }

  return (
<main className="main__wrapper">
  <section className="main__section">
    <div className="main__section--closeButton" onClick={(e)=>{closeSection(e)}}>&times;</div>
    <div className="main__section--box" onClick={(e)=>{expandSection(e)}}>About</div>
  </section>
  <section className="main__section">
    <div className="main__section--closeButton" onClick={(e)=>{closeSection(e)}}>&times;</div>
    <div className="main__section--box" onClick={(e)=>{expandSection(e)}}>About</div>
  </section>
  <section className="main__section">
    <div className="main__section--closeButton" onClick={(e)=>{closeSection(e)}}>&times;</div>
    <div className="main__section--box" onClick={(e)=>{expandSection(e)}}>About</div>
  </section>
  <section className="main__section">
    <div className="main__section--closeButton" onClick={(e)=>{closeSection(e)}}>&times;</div>
    <div className="main__section--box" onClick={(e)=>{expandSection(e)}}>About</div>
  </section>
</main>
  );
}

export default App;
