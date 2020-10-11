import { combineReducers } from "redux";

const productsInBasketReducer = (products = [], action) => {

  // handles REMOVE_ITEM action creator
  if (action.type === "REMOVE_ITEM") {
    const index = products.findIndex(product => product.title === action.payload.title)
    products.splice(index, 1)
    return [...products]
  }
  // handles ADD_ITEM action creator
  if (action.type === "ADD_ITEM") {
    return [...products, action.payload];
  }


  // handles any other kind of action creator
  else {
    return products;
  }
};

const userEmailReducer = (email = '', action) => {

  // handles CHANGE_USER action creator
  if (action.type === "CHANGE_USER") {
    email = action.payload.email
    return email
  }

  // handles any other kind of action creator
  else {
    return email;
  }
};

export default combineReducers({
  products: productsInBasketReducer,
  userEmail: userEmailReducer,
});
