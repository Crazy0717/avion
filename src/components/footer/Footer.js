import React from "react";
import "./Footer.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faPinterest, faSkype, faSquareFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_top">
      <div className="footer_nav">
        <ul>
          <h1>Menu</h1>
          <li>New arrivals</li>
          <li>Best sellers</li>
          <li>Recently viewed</li>
          <li>Popular this week</li>
          <li>All products</li>
        </ul>
        <ul>
          <h1>All products</h1>
          <li><NavLink>Crockery</NavLink></li>
          <li>Furniture</li>
          <li>Homeware</li>
          <li><NavLink>Plant pots</NavLink></li>
          <li><NavLink>Chairs</NavLink></li>
          <li><NavLink>Crockery</NavLink></li>
        </ul>
        <ul>
          <h1>Our company</h1>
          <li>About us</li>
          <li>Vacancies</li>
          <li>Contact us</li>
          <li>Privacy</li>
          <li>Returns policy</li>
        </ul>
      </div>
      <div className="signUp_part">
        <h1>Join our mailing list</h1>
        <div>
          <input type="email" placeholder="your@email.com" />
          <button>Sign up</button>
        </div>
      </div>
      </div>
      <div className="footer_bottom">
        <h2>Copyright 2022 Avion LTD</h2>
        <div className="icons">
        <FontAwesomeIcon className="i" icon={faLinkedin} />
        <FontAwesomeIcon className="i" icon={faSquareFacebook} />
        <FontAwesomeIcon className="i" icon={faInstagram} />
        <FontAwesomeIcon className="i" icon={faSkype} />
        <FontAwesomeIcon className="i" icon={faTwitter} />
        <FontAwesomeIcon className="i" icon={faPinterest} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
