import React, { useEffect, useState } from "react";
import "./Search.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";


import { Link } from "react-router-dom";


const Search = () => {
  const [product, setProduct] = useState();

  const getApi = async () => {
    const request = await fetch("http://localhost:3000/searchData");
    const data = await request.json();
    setProduct(data);
  };

  useEffect(() => {
    getApi();
  }, []);

  const [search, setSearch] = useState("");

  return (
    <div className="Search">
      <Navbar />

      <div className="Input">
        <input
          onChange={(e) => setSearch(e.target.value.trim().toLowerCase())}
          type="text"
        />
      </div>

      <div className="boxes">
        {product &&
          product.filter(item => {
            return search.toLowerCase() === "" ? item : item.name.toLowerCase().includes(search)
          }).map((item) => {
            return (
              <Link to={`/ceramics/${item.id}`} className="box" key={item.id}>
                <div className="img_part">
                  <img src={item.image} alt="" />
                </div>
                <h2>{item.name}</h2>
                <p>${item.price}</p>
              </Link>
            );
          })}
      </div>

      <Footer />
    </div>
  );
};

export default Search;
