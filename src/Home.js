import React from 'react';
import './Home.css'
import Product from './Product'

function Home() {
  return (
  <div className='home__banner'>
      <img 
        src='https://i.imgur.com/KWztOQO.png'
        alt='banner'/>
      <Product/>
  </div>
  );
}

export default Home;
