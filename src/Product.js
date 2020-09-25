import React, { Component } from "react";
import "./Product.css";
import { addItemToBasket } from "./actions/index";
import { eraseItemFromBasket } from "./actions/index";
import { connect } from "react-redux";



class Product extends Component {
  render() {
    const returnButton = () => {
      if (!this.props.place) {
        return (
          <button
            className="product__button"
            onClick={() =>
              this.props.addItemToBasket(
                this.props.title,
                this.props.price,
                this.props.rating,
                this.props.img
              )
            }
          >Add to Basket</button>
        )
      } else {
        return (<button
          className="product__button"
          onClick={() =>
            this.props.eraseItemFromBasket(
              this.props.title
            )
          }
        >Delete</button>)
      }
    }
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
          {returnButton()}
        </center>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { items: state.items };
};

export default connect(mapStateToProps, {
  addItemToBasket: addItemToBasket,
  eraseItemFromBasket: eraseItemFromBasket
})(Product);
