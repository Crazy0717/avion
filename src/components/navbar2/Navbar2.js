import React from "react";
import "./Navbar2.scss";
import { Link, NavLink } from "react-router-dom";

const Navbar2 = ({ setBarState, barState }) => {
  return (
    <nav className="navbar2">
      <div className="ad_part">
        <div className="support_div"></div>
        <div className="title">
          <i class="fa-solid fa-truck-fast"></i>
          <p>Free delivery on all orders over £50 with code easter checkout</p>
        </div>
        <i class="fa-sharp fa-solid fa-xmark close_ad"></i>
      </div>

      <div className="nav_categories">
        <Link to={"/"}>
          <img src="./images/Avion.png" alt="" />
        </Link>
        <ul>
          <li>
            <NavLink to="/plant_pots">Plant pots</NavLink>
          </li>
          <li>
            <NavLink to="/ceramics">Ceramics</NavLink>
          </li>
          <li>
            <NavLink to="/tables">Tables</NavLink>
          </li>
          <li>
            <NavLink to="/chairs">Chairs</NavLink>
          </li>
          <li>
            <NavLink to="/crockery">Crockery</NavLink>
          </li>
          <li>
            <NavLink to="/tableware">Tableware</NavLink>
          </li>
          <li>
            <NavLink to="/cuterly">Cutlery</NavLink>
          </li>
        </ul>
        <div className="user_part">
          <i class="fa-solid fa-magnifying-glass"></i>

          <i class="fa-solid fa-cart-shopping"></i>
          <i class="fa-solid fa-user"></i>
          <i
            onClick={() => setBarState(!barState)}
            class="fa-solid fa-bars phone"
          ></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
