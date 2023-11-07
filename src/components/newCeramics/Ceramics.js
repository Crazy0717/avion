import React from "react"
import "./Ceramics.scss"

const Ceramics = () => {
  return (
    <>
      <div className="ceramics">
        <div className="boxes">
          <div className="box">
            <div className="img_part">
              <img src="./images/Photo.png" alt="" />
            </div>
            <h2>The Dandy chair</h2>
            <p>£250</p>
          </div>
          <div className="box">
            <div className="img_part">
              <img src="./images/Photo (1).png" alt="" />
            </div>
            <h2>TRustic Vase Set</h2>
            <p>£155</p>
          </div>
          <div className="box">
            <div className="img_part">
              <img src="./images/Photo (2).png" alt="" />
            </div>
            <h2>The Silky Vase</h2>
            <p>£125</p>
          </div>
          <div className="box">
            <div className="img_part">
              <img src="./images/Photo (3).png" alt="" />
            </div>
            <h2>The Lucy Lamp</h2>
            <p>£399</p>
          </div>
        </div>
        <button>View collection</button>
      </div>
    </>
  )
}

export default Ceramics
