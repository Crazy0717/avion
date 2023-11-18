import React, { useEffect, useState } from "react";
import "./AllPraducts.css";
import Bosh from "./Bosh/Bosh";
import useFetch from "../../hooks/useFetch";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Ceramics from "../../components/newCeramics/Ceramics";
import { Link } from "react-router-dom";

const AllPraducts = () => {
  const [url, setUrl] = useState("http://localhost:3000/data");
  const { data, error, isPending } = useFetch(url);
  const [product, setProduct] = useState();

  const getApi = async () => {
    const request = await fetch("http://localhost:3000/data3");
    const data = await request.json();
    setProduct(data);
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="page">
      <Navbar />
      <Bosh />
      <Ceramics />
      <div className="boxes">
        {product &&
          product.map((item) => {
            return (
              <Link to={`/ceramics/${item.id}`} className="box" key={item.id}>
                <img src={item.image} alt="" />
                <h4>{item.name}</h4>
                <p>${item.price}</p>
              </Link>
            );
          })}
      </div>
      <Ceramics />
      <div className="button">
        <button>View collection</button>
      </div>
      <Footer />
    </div>
  );
};

export default AllPraducts;
