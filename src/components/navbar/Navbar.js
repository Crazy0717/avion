import React from "react";
import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ setBarState, barState }) => {
  return (
    <nav className="navbar">
      <div className="top_nav">
        <i class="fa-solid fa-magnifying-glass"></i>
        <Link to={"/"}><img src="./images/Avion.png" alt="" /></Link>

        <div className="user_part">
          <i class="fa-solid fa-cart-shopping"></i>
          <i class="fa-solid fa-user"></i>
          <i class="fa-solid fa-magnifying-glass phone"></i>
          <i
            onClick={() => setBarState(!barState)}
            class="fa-solid fa-bars phone"
          ></i>
        </div>
      </div>
      <div className="nav_categories">
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
      </div>
    </nav>
  );
};

export default Navbar;
