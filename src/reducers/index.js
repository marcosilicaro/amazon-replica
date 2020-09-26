import { combineReducers } from "redux";

const productsInBasketReducer = (products = [], action) => {
  if (action.type === "REMOVE_ITEM") {
    products = products.filter(product => {
      return product.title !== action.payload.title
    })
    console.log(products)
  }
  if (action.type === "ADD_ITEM") {


    return [...products, action.payload];

    // products.map(product => {
    // if (product.title == action.payload.title) {
    // product.quantity = ++product.quantity
    // return products
    // } else {
    // return [...products, action.payload];
    // }
    // })

  } else {
    return products;
  }

};

export default combineReducers({
  products: productsInBasketReducer,
});
