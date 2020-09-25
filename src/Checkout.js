import React from "react";
import "./Checkout.css";
import { connect } from "react-redux";
import Product from "./Product";

class Checkout extends React.Component {
  render() {
    return this.props.products.map(product => (
      <div className="checkout__rowsContainer">

        <Product
          title={product.title}
          rating={product.rating}
          price={product.price}
          img={product.img}
          place='basket'
        />

      </div>
    )
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(Checkout);
