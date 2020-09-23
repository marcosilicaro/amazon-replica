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
