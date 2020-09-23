import React from "react";
import "./Checkout.css";
import { connect } from "react-redux";

const listProducts = (products) => {
  if (products.length > 0) {
    products.map((i) => {
      console.log(i.title);
      return <p>Hola</p>;
    });
  } else {
    return <p>No items in the checkout</p>;
  }
};

function Checkout(props) {
  return (
    <div>
      <p>Number of items in checkout: {props.items}</p>
      <br />
      <p>List of products {listProducts(props.products)}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    products: state.products,
  };
};

export default connect(mapStateToProps)(Checkout);
