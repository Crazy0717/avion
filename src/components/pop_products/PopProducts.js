import React, { useState } from "react";
import "./PopProducts.scss";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const PopProducts = () => {
  
  const [url, setUrl] = useState("http://localhost:3000/data2");
  const { data, error, isPending } = useFetch(url);
  return (
    <div className="popular_products">
      <h1 className="pop">Our popular products</h1>
      <div className="boxes">
      {
        data && data.map(item =>{
          return (<Link to={`/ceramics/${item.id}`} className="box" key={item.id}>
          <div className="img_part">
            <img src={item.image} alt="" />
          </div>
          <h2>{item.name}</h2>
          <p>${item.price}</p>
        </Link>)
        })
      }  
      </div>
      <button>View collection</button>
    </div>
  );
};

export default PopProducts;
