import React, { useRef } from 'react';
//import {ReactFullpage as fullpage} from '@fullpage/react-fullpage';
 import {SectionsContainer, Section} from 'react-fullpage';
 import './App.css'
 import Navigation from './components/Navigation/Navigation.js'
 import About from './components/About/About.js'
 import Services from './components/Services/Services.js'
 import Realizations from './components/Realizations/Realizations.js'
 import Contact from './components/Contact/Contact.js'
 import AboutNext from './components/AboutNext/AboutNext.js'


function App() {
  
  return (
     


    
    <div className="main__wrapper">
            {/* <About/>   
            <AboutNext/>
            <Navigation/>*/}
            <Realizations/>
            {/*<Services/> 
            <Contact/>  */}
    </div> 
     
  );
}

export default App;
