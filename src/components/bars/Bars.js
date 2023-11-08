import React from "react";
import "./Bars.scss";
import { NavLink } from "react-router-dom";


const Bars = ({ setBarState, barState }) => {
  return (
    <div>
     
      <div className={barState ? "bars show" : "bars"}>
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
    </div>
  );
};

export default Bars;
