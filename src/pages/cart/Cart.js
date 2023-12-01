import React, { useEffect, useState } from "react";
import "./Cart.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Cart = ({
  cartQuantity,
  setCartQuantity,
  setBarState,
  barState,
  productId,
  setProductId,
}) => {
  const [quantityValue, setQuantityValue] = useState(0);

  // move to top
  const handleTop = () => {
    document.documentElement.scrollTop = 0;
  };

  // calculate price
  const [totalPrice, setTotalPrice] = useState(0);   
  const handlePrice = () => {
    var currentValue = 0;
    productId.forEach((element) => {
      currentValue += element.quantity * element.price;
    });
    setTotalPrice(currentValue);
  };

  const handleQuan = (id, num) => {
    let init = 1;
    productId.forEach((data, index) => {
      if (data.id == id) {
        init = index;
      }
    });

    const tempArr = productId;
    tempArr[init].quantity += num;

    if (tempArr[init].quantity === 0) {
      tempArr[init].quantity = 1;
    } else {
      setProductId([...tempArr]);
    }

    handlePrice();
  };

  const removeProductid = (id) =>{
    setProductId(productId.filter(item =>{return item.id !== id}))
    setCartQuantity(cartQuantity-1)
    handlePrice()
    
  }

  useEffect(() => {
    handlePrice();
    handleTop();
  }, []);


  var nn  = 0

  return (
    <div className="Cart">
      <Navbar
        cartQuantity={cartQuantity}
        setBarState={setBarState}
        barState={barState}
      />
      <main>
        <h1>Your shopping cart</h1>
        <div className="cart_box">
          <div className="top_title">
            <p>Product</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
          <div className="product_section">
            {productId &&
              productId.map((item) => {
                nn += Number(item.price)
                return (
                  <div className="box" key={item.id}>
                    <div className="img_part">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="info_part">
                      <div className="left_part">
                        <h2 className="name">{item.name}</h2>
                        <p className="description">
                          A timeless ceramic vase with a tri color grey glaze.
                        </p>
                        <p className="price">${item.price}</p>
                      </div>
                      <div className="right_part">
                        <div className="quantity_box">
                          <div
                            onClick={() => handleQuan(item.id, -1)}
                            className="minus"
                          >
                            -
                          </div>
                          <p className="quantity">{item.quantity}</p>
                          <div
                            onClick={() => handleQuan(item.id, +1)}
                            className="plus"
                          >
                            +
                          </div>
                        </div>
                        <p className="totalProductPrice">
                          ${item.price * item.quantity}
                        </p>
                        <FontAwesomeIcon onClick={() => removeProductid(item.id)} className="trash" icon={faTrash} />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="bottom">
            <div className="subtotal">
              <h1>Subtotal</h1>
              <p className="totalPrice">${nn}</p>
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
