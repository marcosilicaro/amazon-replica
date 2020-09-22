import { combineReducers } from "redux";

const itemsInBasketReducer = (items = 0, action) => {
    if (action.type === "ADD_ITEM") {
        return items + 1
    } else {
        return items
    }
}

export default combineReducers({
    items: itemsInBasketReducer
})