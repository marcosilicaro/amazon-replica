import React from 'react';
import './MenuItem.css'

function MenuItem(props) {
  return (
  <div className='menuItem'>
    <div>{props.topText}</div>
    <div>{props.bottomText}</div>
  </div>
  );
}

export default MenuItem;
