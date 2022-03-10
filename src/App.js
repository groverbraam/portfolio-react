import React, {useState, useEffect} from 'react';
import {Routes, Route, BrowserRouter, useNavigate} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar'


const App = () => {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
