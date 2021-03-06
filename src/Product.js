import React, { Component } from "react";
import "./Product.css";
import { addItemToBasket } from "./actions/index";
import { eraseItemFromBasket } from "./actions/index";
import { connect } from "react-redux";
import { auth } from './firebase'



class Product extends Component {



  amountOfProductCalculation() {
    let suma = document.getElementById("productInBasket__amountOfProduct").value
    console.log(suma)
  }

  render() {
    if (!this.props.place) {
      return (
        <div className="product__container">
          <p className="product__title">{this.props.title}</p>
          <p className="product__price">{this.props.price}</p>
          <p className="product__rating">
            {Array(this.props.rating)
              .fill()
              .map(() => {
                return <p>⭐</p>;
              })}
          </p>
          <center>
            <img alt="product" src={this.props.img} className="product__img" />
            <br />
            <button
              className="product__button"
              onClick={() =>
                this.props.addItemToBasket(
                  this.props.title,
                  this.props.price,
                  this.props.rating,
                  this.props.img,
                  auth.currentUser ? auth.currentUser.uid : 'noUser'
                )
              }
            >Add to Basket</button>
          </center>
        </div>
      )
    } else {
      return (
        <div className="productInBasket__container">
          <div className="productInBasket__image">
            <img alt="product" src={this.props.img} className="productInBasket__img" />
          </div>
          <div className="productInBasket__description">
            <p className="product__title">{this.props.title}</p>
            <p className="product__price">{this.props.price}</p>
            <p className="product__rating">
              {Array(this.props.rating)
                .fill()
                .map(() => {
                  return <p>⭐</p>;
                })}
            </p>
            <div className='productInBasket__amountOfProduct'>
              <select name="productInBasket__amountOfProduct" id="productInBasket__amountOfProduct">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4 </option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10+">10+</option>
              </select>

            </div>
            <button
              className="product__button"
              onClick={() =>
                this.props.eraseItemFromBasket(
                  this.props.title
                )
              }
            >Delete</button>
          </div>
        </div>
      );
    }


  }
}

const mapStateToProps = (state) => {
  return { items: state.items };
};

export default connect(mapStateToProps, {
  addItemToBasket: addItemToBasket,
  eraseItemFromBasket: eraseItemFromBasket
})(Product);
