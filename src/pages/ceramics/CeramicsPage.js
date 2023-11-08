import React, { useState } from "react";
import "./CeramicsPage.scss";
import Navbar2 from "../../components/navbar2/Navbar2";
import Ceramics from "../../components/newCeramics/Ceramics";
import Different from "../../components/diferent/Different";
import Join from "../../components/join/Join";
import Footer2 from "../../components/footer2/Footer2";

const CeramicsPage = ({ setBarState, barState }) => {
  const [quantityValue, setQuantityValue] = useState(1)
  return (
    <div className="ceramics">
      <Navbar2 setBarState={setBarState} barState={barState} />
      <div className="product_deatils">
        <div className="img_part">
          <img src="./images/Image Left.png" alt="" />
        </div>
        <div className="info_part">
          <h1 className="title">The Dandy Chair</h1>
          <p className="price">£250</p>
          <div className="description">
            <h1>Description</h1>
            <p>
              A timeless design, with premium materials features as one of our
              most popular and iconic pieces. The dandy chair is perfect for any
              stylish living space with beech legs and lambskin leather
              upholstery.
            </p>
            <ul>
              <li>Premium material</li>
              <li>Handmade upholstery</li>
              <li>Quality timeless classic</li>
            </ul>
          </div>
          <div className="dimensions">
            <h4>Dimensions</h4>
            <div className="big_box">
              <div className="box">
                <h2>Height</h2>
                <p>110cm</p>
              </div>
              <div className="box">
                <h2>Width</h2>
                <p>75cm</p>
              </div>
              <div className="box">
                <h2>Depth</h2>
                <p>50cm</p>
              </div>
            </div>
          </div>
          <div className="amount">
            <h3>Amount:</h3>
            <div className="quantity_box">
              <div onClick={() => setQuantityValue(quantityValue-1)} className="minus">-</div>
              <p className="quantity">{quantityValue}</p>
              <div onClick={() => setQuantityValue(quantityValue+1)} className="plus">+</div>
            </div>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
      <h1 className="also">You might also like</h1>
      <Ceramics />
      <Different />
      <Join />
      <Footer2 />
    </div>
  );
};

export default CeramicsPage;
