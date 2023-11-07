import React from "react";
import "./PopProducts.scss";

const PopProducts = () => {
  return (
    <div className="popular_products">
      <h1 className="pop">Our popular products</h1>
      <div className="boxes">
        <div className="box">
          <div className="img_part">
            <img src="./images/large.png" alt="" />
          </div>
          <h2>The Poplar suede sofa</h2>
          <p>£980</p>
        </div>
        <div className="box">
          <div className="img_part">
            <img src="./images/Photo (1).png" alt="" />
          </div>
          <h2>The Dandy chair</h2>
          <p>£250</p>
        </div>
        <div className="box">
          <div className="img_part">
            <img src="./images/Photo (2).png" alt="" />
          </div>
          <h2>The Dandy chair</h2>
          <p>£250</p>
        </div>
      </div>
      <button>View collection</button>
    </div>
  );
};

export default PopProducts;
