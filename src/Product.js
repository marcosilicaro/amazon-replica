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
      <img alt="product " src={props.img} className="product__img" />
      <button className="product__button">Add to basket</button>
    </div>
  );
}

export default Product;
