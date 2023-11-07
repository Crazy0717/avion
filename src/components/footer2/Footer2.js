import React from "react";
import "./Footer2.scss";
import { NavLink } from "react-router-dom";

const Footer2 = () => {
  return (
    <footer className="footer2">
      <div className="footer_top">
        <div className="support_block">
          <ol>
            <li>
              <h1>Avion</h1>
            </li>
            <li>21 New York Street</li>
            <li>New York City</li>
            <li>United States of America</li>
            <li>432 34</li>
          </ol>
          <div className="icons">
            <h5>Social links</h5>
            <div className="icon">
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-square-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-skype"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-pinterest"></i>
            </div>
          </div>
        </div>

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
            <li>
              <NavLink>Crockery</NavLink>
            </li>
            <li>Furniture</li>
            <li>Homeware</li>
            <li>
              <NavLink>Plant pots</NavLink>
            </li>
            <li>
              <NavLink>Chairs</NavLink>
            </li>
            <li>
              <NavLink>Crockery</NavLink>
            </li>
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
      </div>
      <div className="footer_bottom">
        <h2>Copyright 2022 Avion LTD</h2>
      </div>
    </footer>
  );
};

export default Footer2;
