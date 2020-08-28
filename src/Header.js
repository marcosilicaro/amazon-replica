import React from 'react';
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import './Header.css'

function Header() {
  return (
  <div class='header__navbar'>
    <div className='header__logoMenu'>
      <Link to='/'>
        <img 
        className='header__logo'
        alt='amazon-logo'
        src='https://pngimg.com/uploads/amazon/amazon_PNG25.png'></img>
      </Link>
    </div>
    <div className='header__searchBar'>
      <form>
      <input type="text" />
      <SearchIcon/>
      </form>
    </div>
    <div className='header__rightOptions'>
      <Link to='/'>Home</Link>
    </div>
  </div>
  );
}

export default Header;
