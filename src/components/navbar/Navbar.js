import React from "react"
import "./Navbar.scss"
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser} from "@fortawesome/free-regular-svg-icons";
import { faBars, faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const Navbar = ({cartQuantity, setBarState, barState }) => {
  return (
    <nav className="navbar">
      <div className="top_nav">
      <Link to={"/search"}><FontAwesomeIcon icon={faMagnifyingGlass}/></Link>
        <Link to={"/"}><img src="./images/Avion.png" alt="" /></Link>

        <div className="user_part">
          <Link to={"/cart"}><FontAwesomeIcon icon={faCartShopping} /></Link>
          <div className="cartQuantity">{cartQuantity}</div>
          <Link><FontAwesomeIcon icon={faUser} /></Link>
          <Link><FontAwesomeIcon icon={faMagnifyingGlass} className="phone"/></Link>
          <FontAwesomeIcon onClick={() => setBarState(!barState)} icon={faBars} className="phone"/>
        </div>
      </div>
      <div className="nav_categories">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
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
