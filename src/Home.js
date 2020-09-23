import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home__banner">
      <div className="home__imageContainer">
        <img
          src="https://i.imgur.com/KWztOQO.png"
          alt="banner"
          className="home__image"
        />
      </div>

      <div className="home__rowsContainer">
        <div className="home__doubleRow">
          <Product
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            rating={5}
            price={11.96}
            img="https://m.media-amazon.com/images/I/51N-u8AsmdL.jpg"
          />
          <Product
            title="Kenwood kMix KMX60GBK Stand Mixer - Black"
            rating={4}
            price={329.68}
            img="https://images-na.ssl-images-amazon.com/images/I/51zfRoC1iYL._AC_SX679_.jpg"
          />
        </div>
        <div className="home__tripleRow">
          <Product
            title="Samsung Galaxy Watch 3 (41mm, GPS, Bluetooth) Smart Watch with Advanced Health monitoring, Fitness Tracking , and Long lasting Battery - Mystic Silver (US Version)"
            rating={4}
            price={399.99}
            img="https://images-na.ssl-images-amazon.com/images/I/81Iu41zFPwL._AC_SY879_.jpg"
          />
          <Product
            title="Panasonic ErgoFit In-Ear Earbud Headphones RP-HJE120K"
            rating={5}
            price={9.35}
            img="https://images-na.ssl-images-amazon.com/images/I/617O4vOhUSL._AC_SX679_.jpg"
          />
          <Product
            title="Moto G8 Play | Unlocked | International GSM only | 2/32GB | 13MP Camera | 2019 | Gray"
            rating={2}
            price={111.96}
            img="https://images-na.ssl-images-amazon.com/images/I/81x2KmFnueL._AC_SX679_.jpg"
          />
        </div>
        <div className="home__singleRow">
          <Product
            title="Dell S-Series 27-Inch Screen LED-Lit Gaming Monitor (S2719DGF); QHD (2560 x 1440) up to 155 Hz; 16:9; 1ms Response time; HDMI 2.0; DP 1.2; USB; FreeSync; LED; Height Adjust, Tilt, Swivel & Pivot"
            rating={5}
            price={287.96}
            img="https://images-na.ssl-images-amazon.com/images/I/81ONemBAVtL._AC_SX679_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
