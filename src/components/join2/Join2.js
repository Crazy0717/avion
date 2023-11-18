import React from 'react'
import "./Join.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';


const Join2 = () => {
  return (
    <div className="join_club2">
        <div className="big_box">
          <h1>Join the club and get the benefits</h1>
          <p>
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop up stores and more
          </p>
          <div className="checks">
            <div className="check">
            <FontAwesomeIcon icon={faCircleCheck} />
            <p>Exclusive offers</p>
            </div>
            <div className="check">
            <FontAwesomeIcon icon={faCircleCheck} />
            <p>Free events</p>
            </div>
            <div className="check">
            <FontAwesomeIcon icon={faCircleCheck} />
            <p>Large discounts</p>
            </div>
          </div>
          <div className="signUp_part">
            <input type="email" placeholder="your@email.com" />
            <button>Sign up</button>
          </div>
        </div>
      </div>
  )
}

export default Join2