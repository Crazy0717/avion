import React from "react";
import "./Plant_pots.scss";
import Navbar from "../../components/navbar/Navbar";
import Different from "../../components/diferent/Different";
import Ceramics from "../../components/newCeramics/Ceramics";
import Started from "../../components/itStarted/Started"
import Join2 from "../../components/join2/Join2";
import Footer from "../../components/footer/Footer";

const Plant_pots = ({setBarState,barState}) => {
  return (

    <div className="plant_pots">
        <Navbar setBarState={setBarState} barState={barState}/>

      <header>
        <div className="background_img">
          <img
            src="https://s3-alpha-sig.figma.com/img/b062/f355/fa9b27255272d76e665cce4314b4aedb?Expires=1699833600&Signature=AGhX2vKyA14Q71sQGZ6RJQ7vddLoKEPPMLh8rWUewqcnGc0m9CvSgKKwM0lhV9VAnuqflL1VHcSnr6bybI7HR2MUU~mxh6ivF5eZiV2I~BvLIt~3pctThnXe5vQwhBrCuA5W3W8ssmY8s~ASyp79mKY3cDxLpW7pbnicoASxTygXlQdX6sGGy123qy3YdZZwJ0JMUJhtJHvN7zySx1KDZBzka0dg-UcQZAMUdYONQzfVDYOokfNcNfBLCuH4zhnkC-XKs-ycx--62fy0UBys4Q5pB2C7pbz1NQEZGZxr0i3vyx5nhwv083j8K8dF9gBT1vBEwuVdA2rIVu9tvR~tWw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </div>
        <div className="box">
          <h1>Luxury homeware for people who love timeless design quality</h1>
          <p>Shop the new Spring 2022 collection today</p>
          <button>View collection</button>
        </div>
      </header>
      <Different />
      <Ceramics />
      <Started />
      <Join2 />
      <Footer />
    </div>
  );
};

export default Plant_pots;
