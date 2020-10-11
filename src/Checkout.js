import React from "react";
import "./Checkout.css";
import { connect } from "react-redux";
import Product from "./Product";
import Subtotal from "./Subtotal";
import { auth } from './firebase'

class Checkout extends React.Component {
  constructor(props) {
    super(props);

  }

  subtotalCalculation(products) {
    let suma = 0
    products.map(product => suma = product.price + suma)
    return suma
  }

  render() {
    console.log(this.props.products)
    return (
      <div className='checkout'>
        <div className='checkout__container'>
          <div className='title'>
            Your Shopping Basket
          </div>
          <hr>
          </hr>
          <br />

          {
            this.props.products.map(
              product => {
                if (auth.currentUser) {
                  if (product.userId === auth.currentUser.uid) {
                    return (
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
                  }
                } else if (product.userId === 'noUser') {
                  return (
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
                }
              }
            )
          }






        </div>

        <div className='checkout__subtotal'>
          <Subtotal
            subtotal={this.subtotalCalculation(this.props.products).toFixed(2)}
          />
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

export default connect(mapStateToProps)(Checkout);
