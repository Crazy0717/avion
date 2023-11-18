import React, { useState } from "react";
import "./Cart.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import useFetch from "../../hooks/useFetch";

const Cart = ({setBarState,barState}) => {
  const [url, setUrl] = useState("");
  const { data, error, isPending } = useFetch(url);
  const [cartData, setCartData] = useState([])

  const [quantityValue, setQuantityValue] = useState(1);
  const handleQuan = () => {
    quantityValue < 2?setQuantityValue(1):setQuantityValue(quantityValue - 1);
  };
  // const addToCart = (id) => {
  //   const object = data.filter((item) => {
  //     return item.id == id;
  //   });

  //   if (cartData.includes(object[0])) {
  //     alert("❗ This product has been added to the cart");
  //   } else {
  //     setCartData([...cartData, object[0]]);
  //   }
  // };
  
  return (
    <div className="Cart">
      <Navbar setBarState={setBarState} barState={barState}/>
      <main>
        <h1>Your shopping cart</h1>
        <div className="cart_box">
          <div className="top_title">
            <p>Product</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
          <div className="product_section">
            <div className="box">
              <div className="img_part">
                <img src="./images/Photo (2).png" alt="" />
              </div>
              <div className="info_part">
                <div className="left_part">
                  <h2 className="name">Graystone vase</h2>
                  <p className="description">
                    A timeless ceramic vase with a tri color grey glaze.
                  </p>
                  <p className="price">$85</p>
                </div>
                <div className="right_part">
                  <div className="quantity_box">
                    <div onClick={handleQuan} className="minus">
                      -
                    </div>
                    <p className="quantity">{quantityValue}</p>
                    <div
                      onClick={() => setQuantityValue(quantityValue + 1)}
                      className="plus"
                    >
                      +
                    </div>
                  </div>
                  <p className="totalProductPrice">$85</p>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="img_part">
                <img src="./images/Product Image.png" alt="" />
              </div>
              <div className="info_part">
                <div className="left_part">
                  <h2 className="name">Graystone vase</h2>
                  <p className="description">
                    A timeless ceramic vase with a tri color grey glaze.
                  </p>
                  <p className="price">$85</p>
                </div>
                <div className="right_part">
                  <div className="quantity_box">
                    <div onClick={handleQuan} className="minus">
                      -
                    </div>
                    <p className="quantity">{quantityValue}</p>
                    <div
                      onClick={() => setQuantityValue(quantityValue + 1)}
                      className="plus">
                      +
                    </div>
                  </div>
                  <p className="totalProductPrice">$85</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="subtotal">
                <h1>Subtotal</h1>
                <p className="totalPrice">$45</p>
            </div>
            <p>Taxes and shipping are calculated at checkout</p>
            <button>Go to checkout</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
