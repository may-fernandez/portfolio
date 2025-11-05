import React from "react";
import "./Hero.css";
import linkedin_logo from "../../assets/linkedin_logo.svg";
import logo_github from '../../assets/logo_github.svg'
import gmail_logo from "../../assets/gmail_logo.svg";
import cv_pdf from '../../assets/Mayra-Fernandez_CV.pdf';
const Hero = () => {
  return (
    <div className="hero">
      
      <h1>
        <span>Mayra Fernández,</span> desarrolladora web.
      </h1>
      <p>Enfocada en programación full-stack y diseño UX.</p>
      <div className="hero-action">
        <div className="hero-resume">
          <a href="mailto:mayra.bf3@gmail.com" target="_blank" rel="noopener noreferrer"  className="a-hero">
            <img src={gmail_logo} alt="logo gmail" id="gmail" />
            Gmail
          </a>
        </div>

        <div className="hero-resume">
          <a href="https://www.linkedin.com/in/mayra-belen-fernandez" target="_blank" rel="noopener noreferrer" className="a-hero">
            <img src={linkedin_logo} alt="logo linkedin" id="linkedin" />
            Linkedin
          </a>
        </div>

        <div className="hero-resume">
          <a href="https://github.com/may-fernandez" target="_blank" rel="noopener noreferrer" className="a-hero">
            <img src={logo_github} alt="logo github" id="github" />
            Github
          </a>
        </div>

        <div className="hero-resume">
          <a href={cv_pdf} target="_blank" rel="noopener noreferrer" className="a-hero">
            Curriculum Vitae
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
