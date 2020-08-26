import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
  return (
  <div class='header__navbar'>
    <div className='header__logoMenu'>
      <Link to='/'>Menu</Link>
      <Link to='/'>Logo</Link>
    </div>
    <div className='header__searchBar'>
      Search Bar
    </div>
    <div className='header__rightOptions'>
      <Link to='/'>Home</Link>
    </div>
  </div>
  );
}

export default Header;
