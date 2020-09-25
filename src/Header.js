import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import MenuItem from "./MenuItem";
import "./Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <div class="header__navbar">
        <div className="header__logoMenu">
          <Link to="/">
            <img
              className="header__logo"
              alt="amazon-logo"
              src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
            ></img>
          </Link>
        </div>
        <div className="header__searchBar">
          <form>
            <input type="text" />
            <div className="header__searchIcon">
              <SearchIcon />
            </div>
          </form>
        </div>
        <div className="header__rightOptions">
          <Link style={{ textDecoration: "none" }} to="/">
            <MenuItem topText="Hello, Marco" bottomText="Account & List" />
          </Link>
          <Link style={{ textDecoration: "none" }} to="/">
            <MenuItem topText="Returns" bottomText="& Orders" />
          </Link>
          <Link style={{ textDecoration: "none" }} to="/checkout">
            <div className="header__cart">
              <ShoppingBasketIcon />
              <div className="header__cartItems">{this.props.products.length}</div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(Header);
