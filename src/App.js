import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './home'
import Bio from './bio'
import Resume from './resume'
import Skills from './skills'
import Projects from './projects'
import Contact from './contact'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Bio />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
