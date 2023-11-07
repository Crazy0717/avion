import React from "react";
import "./Bars.scss";

const Bars = ({ setBarState, barState }) => {
  return (
    <div>
     
      <div className={barState ? "bars show" : "bars"}>
        <ul>
          <li>Plant pots</li>
          <li>Ceramics</li>
          <li>Tables</li>
          <li>Chairs</li>
          <li>Crockery</li>
          <li>Tableware</li>
          <li>Cutlery</li>
        </ul>
      </div>
    </div>
  );
};

export default Bars;
