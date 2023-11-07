import React from "react";
import "./Started.scss";

const Started = () => {
  return (
    <div className="started">
      <div className="info_part">
        <h1>It started with a small idea</h1>
        <p>
          A global brand with local beginnings, our story begain in a small
          studio in South London in early 2014
        </p>
        <button>View collection</button>
      </div>
      <div className="img_part">
        <img src="./images/Image Block.png" alt="" />
      </div>
    </div>
  );
};

export default Started;
