import React from "react";
import "./Different.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faSeedling, faTruckFast, faWallet } from "@fortawesome/free-solid-svg-icons";


const Different = () => {
  return (
    <div className="different">
      <h1>What makes our brand different</h1>
      <div className="dif_Boxes">
        <div className="dif_Box">
          <FontAwesomeIcon className="i" icon={faTruckFast} />
          <h2>Next day as standard</h2>
          <p>Order before 3pm and get your order the next day as standard</p>
        </div>
        <div className="dif_Box">
          <FontAwesomeIcon className="i" icon={faCircleCheck} />
          <h2>Made by true artisans</h2>
          <p>Handmade crafted goods made with real passion and craftmanship</p>
        </div>
        <div className="dif_Box">
          <FontAwesomeIcon className="i" icon={faWallet} />
          <h2>Unbeatable prices</h2>
          <p>
            For our materials and quality you won’t find better prices anywhere
          </p>
        </div>
        <div className="dif_Box">
          <FontAwesomeIcon className="i" icon={faSeedling} />
          <h2>Recycled packaging</h2>
          <p>
            We use 100% recycled packaging to ensure our footprint is manageable
          </p>
        </div>
      </div>
    </div>
  );
};

export default Different;
