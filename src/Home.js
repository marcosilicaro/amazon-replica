import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home__banner">
      <img
        src="https://i.imgur.com/KWztOQO.png"
        alt="banner"
        className="home__image"
      />
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
    </div>
  );
}

export default Home;
