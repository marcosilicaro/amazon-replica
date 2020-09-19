import React from "react";
import "./Product.css";

function Product(props) {
  return (
    <div className="product__container">
      <p className="product__title">{props.title}</p>
      <p className="product__price">{props.price}</p>
      <p className="product__rating">
        {Array(props.rating)
          .fill()
          .map(() => {
            return <p>⭐</p>;
          })}
      </p>
      <center>
        <img alt="product" src={props.img} className="product__img" />
        <br />
        <button className="product__button">Add to basket</button>
      </center>

    </div>
  );
}

export default Product;
