import React, { Component } from "react";
import { Link, useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import MenuItem from "./MenuItem";
import "./Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { connect } from "react-redux";
import { auth } from './firebase'
import { changeUserEmail } from "./actions/index";

class Header extends Component {



  render() {



    const returnLoggedBasket = (products) => {
      let productAmount = 0
      products.map(product => {
        if (product.userId === auth.currentUser.uid) {
          productAmount = ++productAmount
        } else {
          return 0
        }
      }
      )
      return productAmount
    }

    const returnNoUserBasket = (products) => {
      let productAmount = 0
      products.map(product => {
        if (product.userId === 'noUser') {
          productAmount = ++productAmount
        } else {
          return 0
        }
      }
      )
      return productAmount
    }


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

          {this.props.userEmail ? (<MenuItem
            topText=
            {<Link style={{ textDecoration: "none", color: 'grey' }} to="/login">{this.props.userEmail}</Link>}
            bottomText=
            {
              <Link style={{ textDecoration: "none", color: 'white' }} to="/">
                <p
                  onClick={() => {
                    auth.signOut()
                    this.props.changeUserEmail('')
                  }
                  }>
                  Sign Out
                </p>
              </Link>
            }
          />) : (<MenuItem
            topText=
            {<p style={{ textDecoration: "none", color: 'grey' }} >Hi User</p>}
            bottomText=
            {<Link style={{ textDecoration: "none", color: 'white' }} to="/login">
              <p>
                Sign In
              </p>
            </Link>}
          />)}

          <Link style={{ textDecoration: "none" }} to="/login">
            <MenuItem topText="Returns" bottomText="& Orders" />
          </Link>
          <Link style={{ textDecoration: "none" }} to="/checkout">

            <div className="header__cart">
              <ShoppingBasketIcon />
              <div className="header__cartItems">

                {this.props.userEmail ? returnLoggedBasket(this.props.products) : returnNoUserBasket(this.props.products)}

              </div>
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
    userEmail: state.userEmail
  };
};

export default connect(mapStateToProps, {
  changeUserEmail: changeUserEmail,
})(Header);
