import React from "react";
import "./Footer.css";
import mail from "../../assets/mail_icon.svg";
import logo_wpp from "../../assets/logo_wpp.svg";
import location_icon from "../../assets/location_icon.svg";

function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="location">
          <img src={location_icon} alt="" />
          <p>Buenos Aires, Argentina</p>
        </div>

        <a href="mailto:mayra.bf3@gmail.com" rel="noopener noreferrer" target="_blank">
          <img src={mail} />
          mayra.bf3@gmail.com
        </a>

        <a href="https://wa.me/5491157210065" rel="noopener noreferrer">
          <img src={logo_wpp} />
          +54 9 11 5721-0065
        </a>
      </footer>
    </div>
  );
}

export default Footer;
