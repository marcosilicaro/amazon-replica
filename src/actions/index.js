export const addItemToBasket = (title, price, rating, img, userId) => {
  return {
    type: "ADD_ITEM",
    payload: {
      title: title,
      price: price,
      rating: rating,
      img: img,
      userId: userId
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

export const changeUserEmail = (email) => {
  return {
    type: "CHANGE_USER",
    payload: {
      email: email
    },
  };
};

