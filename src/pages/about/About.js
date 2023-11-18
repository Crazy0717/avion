import React from "react";
import Footer2 from "../../components/footer2/Footer2";
import Navbar2 from "../../components/navbar2/Navbar2";
import "./about.css";
import Different from "../../components/diferent/Different";
import Join2 from "../../components/join2/Join2";

function About() {
  return (
    <div className="about">
      <Navbar2 />
      <div>
        <h1 className="main_title">
          A brand built on the love of craftmanship, <br />
          quality and outstanding customer service
        </h1>
        <div className="mainhead">
          <div className="text">
            <h2>
              From a studio in London to a global brand with <br />
              over 400 outlets
            </h2>

            <p>
              When we started Avion, the idea was simple. Make high quality
              furniture <br />
              affordable and available for the mass market. <br />
              <br />
              Handmade, and lovingly crafted furniture and homeware is what we
              live, <br />
              breathe and design so our Chelsea boutique become the hotbed for
              the <br />
              London interior design community.
            </p>

            <button>Get in touch</button>
          </div>
          <div className="img">
            <img src="./images/Image.png" />
          </div>
        </div>
        <div className="mainhead">
          <div className="img">
            <img src="./images/Image (2).png" />
          </div>
          <div className="text">
            <h2>
              Our service isn’t just personal, it’s actually <br />
              hyper personally exquisite
            </h2>

            <p>
              When we started Avion, the idea was simple. Make high quality
              furniture affordable and available for the mass market. <br />
              <br /> Handmade, and lovingly crafted furniture and homeware is
              what we live, breathe and design so our Chelsea boutique become
              the hotbed for the London interior design community.
            </p>

            <button>Get in touch</button>
          </div>
        </div>
        <Different />
        <Join2 />
      </div>
      <Footer2 />
    </div>
  );
}

export default About;
