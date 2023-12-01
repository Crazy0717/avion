import React from "react";
import "./Join.scss";

const Join = () => {
  
  return (
    <div className="join_club">
      <div className="big_box">
        <h1>Join the club and get the benefits</h1>
        <p>
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </p>
        <div className="signUp_part">
          <input type="email" placeholder="your@email.com" />
          <button>Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Join;
