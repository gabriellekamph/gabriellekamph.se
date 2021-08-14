import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import {ReactComponent as ArrowSVG} from "./img/arrow.svg";

console.log("testing");

export class App extends Component {
  render() {
    return (

      <Router>

      <section className="App">              
              <div id="outer-container">
              <ScrollToTop smooth component={<ArrowSVG />} />
                <Navbar pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
            
                <div id="page-wrap">
                  <Header />
                  <About />
                  <Contact />
                
                </div>
              </div>
      </section>  
      
      <Switch>
      <Route path="/home" component={Header} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      </Switch>

      </Router>



    )
  }
}

export default App;
