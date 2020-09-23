import React from "react";
import "./Checkout.css";
import { connect } from "react-redux";

function Checkout(props) {
  return <div>Number of items in checkout: {props.items}</div>;
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps)(Checkout);
