import React, {useState, useEffect, useRef} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css'
import Navigation from './components/Navigation/Navigation.js'
import About from './components/About/About.js'
import Services from './components/Services/Services.js'
import Realizations from './components/Realizations/Realizations.js'
import Contact from './components/Contact/Contact.js'

function App() {





  return (
     
        <div className="main__wrapper">
          <Navigation/>
          <About/>
          <Services/>
          <Realizations/>
          <Contact/>
        </div>
     
  );
}

export default App;
