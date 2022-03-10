import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from 'react-helmet';

const Navbar = () => {
  return (
  	<div className="header">
        <Helmet>
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Neonderthaw&display=swap" rel="stylesheet"></link>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap" rel="stylesheet"></link>
        </Helmet>
        <div className="name">Christopher Thompson</div>
        <div className="icon-container">
            <a><ion-icon id="dayNight-outline" name="moon-outline"></ion-icon></a>
            <a href="https://github.com/groverbraam" target="_blank"><ion-icon id="logo-github" name="logo-github"></ion-icon></a>
            <a href="https://www.linkedin.com/in/christophermaleakethompson/" target="_blank"><ion-icon id="logo-linkedin" name="logo-linkedin"></ion-icon></a>
        </div>
        <nav className="sub-header">
            <li className="home"><a href="index.html">Home</a></li>
            <li className="resume"><a href="resume.html">Resume</a></li>
            <li className="projects"><a href="projects.html">Projects</a></li>
            <li className="bio"><a href="bio.html">Bio</a></li>
            <li className="contact"><a href="contact.html">Contact</a></li>
        </nav>
        
    </div>
  );
 };

 export default Navbar;