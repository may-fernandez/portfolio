import React from "react";
import "./Hero.css";
import linkedin_logo from "../../assets/linkedin_logo.svg";
import logo_github from '../../assets/logo_github.svg'
import gmail_logo from "../../assets/gmail_logo.svg";

const Hero = () => {
  return (
    <div className="hero">
      
      <h1>
        <span>Mayra Fernández,</span> desarrolladora frontend.
      </h1>
      <p>Enfocada en programación web y diseño UX.</p>
      <div className="hero-action">
        <div className="hero-resume">
          <a href="mailto:mayra.bf3@gmail.com" target="_blank" className="a-hero">
            <img src={gmail_logo} alt="logo gmail" id="gmail" />
            Gmail
          </a>
        </div>

        <div className="hero-resume">
          <a href="" target="_blank" className="a-hero">
            <img src={linkedin_logo} alt="logo linkedin" id="linkedin" />
            Linkedin
          </a>
        </div>

        <div className="hero-resume">
          <a href="https://github.com/may-fernandez" target="_blank" className="a-hero">
            <img src={logo_github} alt="logo github" id="github" />
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
