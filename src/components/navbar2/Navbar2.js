import React from "react";
import "./Navbar2.scss";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping, faMagnifyingGlass, faTruckFast, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Navbar2 = ({ setBarState, barState }) => {
  return (
    <nav className="navbar2">
      <div className="ad_part">
        <div className="support_div"></div>
        <div className="title">
          <FontAwesomeIcon icon={faTruckFast} />
          <p>Free delivery on all orders over £50 with code easter checkout</p>
        </div>
        <FontAwesomeIcon className="close_ad" icon={faXmark} />
      </div>

      <div className="nav_categories">
        <Link to={"/"}>
          <img src="/images/Avion.png" alt="" />
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
          <Link>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
          <Link to={"/cart"}>
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
          <Link>
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <FontAwesomeIcon
            onClick={() => setBarState(!barState)}
            icon={faBars}
            className="phone"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
