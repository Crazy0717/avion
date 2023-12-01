import React, { useEffect, useState } from "react";
import "./ProductPage.scss";
import Navbar2 from "../../components/navbar2/Navbar2";
import Ceramics from "../../components/newCeramics/Ceramics";
import Different from "../../components/diferent/Different";
import Join from "../../components/join/Join";
import Footer2 from "../../components/footer2/Footer2";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const CeramicsPage = ({
  cartQuantity,
  setCartQuantity,
  productId,
  setProductId,
  setBarState,
  barState,
}) => {
  const [quantityValue, setQuantityValue] = useState(1);
  const { id } = useParams();

  const [url, setUrl] = useState(`http://localhost:3000/data/${id}`);

  useEffect(() => {
    if (id > 4) {
      setUrl(`http://localhost:3000/data2/${id}`);
    }
    if (id > 7) {
      setUrl(`http://localhost:3000/data3/${id}`);
    }
  }, []);

  const { data, error, isPending } = useFetch(url);

  const handleQuan = () => {
    quantityValue < 2
      ? setQuantityValue(1)
      : setQuantityValue(quantityValue - 1);
  };

  const handleCart = () => {
    if (productId.includes(data)) {
      alert("❗️ This product has been added to the cart");
    } else {
      setProductId([...productId, data]);
    }
    setCartQuantity(cartQuantity + 1);
  };

  const handleTop = () => {
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    handleTop();
  }, []);

  return (
    <div className="ceramics">
      <Navbar2
        cartQuantity={cartQuantity}
        setBarState={setBarState}
        barState={barState}
      />
      {data && (
        <div className="product_deatils">
          <div className="img_part">
            <img src={data.image} alt="" />
          </div>
          <div className="info_part">
            <h1 className="title">{data.name}</h1>
            <p className="price">${data.price}</p>
            <div className="description">
              <h1>Description</h1>
              <p>
                A timeless design, with premium materials features as one of our
                most popular and iconic pieces. The dandy chair is perfect for
                any stylish living space with beech legs and lambskin leather
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
              <button onClick={handleCart}>Add to cart</button>
            </div>
          </div>
        </div>
      )}

      <h1 className="also">You might also like</h1>
      <Ceramics />
      <Different />
      <Join />
      <Footer2 />
    </div>
  );
};

export default CeramicsPage;
