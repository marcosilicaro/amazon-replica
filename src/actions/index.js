export const addItemToBasket = (title, price, rating, img) => {
  return {
    type: "ADD_ITEM",
    payload: {
      title: title,
      price: price,
      rating: rating,
      img: img,
    },
  };
};

export const eraseItemFromBasket = (title) => {
  return {
    type: "REMOVE_ITEM",
    payload: {
      title: title
    },
  };
};

