import React, { useState } from "react";
import "./Ceramics.scss";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const Ceramics = () => {
  const [url, setUrl] = useState("http://localhost:3000/data");
  const { data, error, isPending } = useFetch(url);
  return (
    <>
      <div className="ceramics">
        <div className="boxes">
          {
            data && data.map(item =>{
              return ( <Link to={`/ceramics/${item.id}`} className="box" key={item.id}>
              <div className="img_part">
                <img src={item.image} alt="" />
              </div>
              <h2>{item.name}</h2>
              <p>{item.price}</p>
            </Link>)
             
            })
          }
              
        </div>
        <button className="view">View collection</button>
      </div>
    </>
  );
};

export default Ceramics;
