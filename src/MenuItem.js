import React from 'react';
import './MenuItem.css'

function MenuItem(props) {
  return (
  <div className='menuItem'>
    <div className='menuItem__topText'>{props.topText}</div>
    <div className='menuItem__bottomText'>{props.bottomText}</div>
  </div>
  );
}

export default MenuItem;
