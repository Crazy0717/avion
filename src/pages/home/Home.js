import React from "react";
import "./Home.scss";
import Different from "../../components/diferent/Different";
import Ceramics from "../../components/newCeramics/Ceramics";
import PopProducts from "../../components/pop_products/PopProducts";
import Join from "../../components/join/Join";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

const Home = ({cartQuantity, setBarState, barState }) => {
  return (
    <div className="home">
      <Navbar cartQuantity={cartQuantity} setBarState={setBarState} barState={barState} />

      <header>
        <div className="info_part">
          <div className="info_first">
            <h1>The furniture brand for the future, with timeless designs</h1>
            <Link to={"/allproducts"}><button>View collection</button></Link>
          </div>

          <p>
            A new era in eco friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors and a beautiful way to
            display things digitally using modern web technologies.
          </p>
        </div>
        <div className="photo_part">
          <img src="./images/Right Image.png" alt="" />
        </div>
      </header>
      <main>
        <Different />
        <h1 className="new_ceramics">New ceramics</h1>
        <Ceramics />
        <PopProducts />
        <Join />
        <div className="main_lest">
          <div className="info_part">
            <h1>
              From a studio in London to a global brand with over 400 outlets
            </h1>
            <p>
              When we started Avion, the idea was simple. Make high quality
              furniture affordable and available for the mass market. <br />
              <br /> Handmade, and lovingly crafted furniture and homeware is
              what we live, breathe and design so our Chelsea boutique become
              the hotbed for the London interior design community.
            </p>
            <button>Get in touch</button>
          </div>
          <div className="img_part">
            <img src="./images/Image.png" alt="" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
