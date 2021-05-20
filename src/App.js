import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css'
import Navigation from './components/Navigation/Navigation.js'
import About from './components/About/About.js'
import Services from './components/Services/Services.js'
import Realizations from './components/Realizations/Realizations.js'
import Contact from './components/Contact/Contact.js'

function App() {


  return (
      <Router>
        <div className="main__wrapper">
          <Navigation/>
          <Route path="/about" component={About}/>
          <Route path="/services" component={Services}/>
          <Route path="/realizations" component={Realizations}/>
          <Route path="/contact" component={Contact}/>
        </div>
     </Router>
  );
}

export default App;
