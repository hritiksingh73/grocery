import {ActionTypes} from '../constants/constants';

const initialState = {
  fruitCart: [],
  numberOfItems: '',
};

export const cartReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case ActionTypes.ADD_FRUITS_TO_CART:
      const {id, title, rating, price, maxPrice, quantity, url, numberOfItem} =
        payload;
      return {
        ...state,
        fruitCart: [
          ...state.fruitCart,
          {
            id: id,
            title: title,
            rating: rating,
            price: price,
            maxPrice: maxPrice,
            quantity: quantity,
            url: url,
            numberOfItem: numberOfItem,
          },
        ],
      };

    case ActionTypes.ITEMS_INCRIMENT:
      let increaseItem = [...state.fruitCart];
      const incQuantity = increaseItem.map(item => {
        return item.id === payload
          ? {
              ...item,
              numberOfItem: item.numberOfItem + 1,
            }
          : item;
      });
      return {
        ...state,
        fruitCart: incQuantity,
      };

    case ActionTypes.ITEMS_DECREMENT:
      let decreaseItem = [...state.fruitCart];
      const decQuantity = decreaseItem.map(item => {
        return item.id === payload && item.numberOfItem > 0
          ? {
              ...item,
              numberOfItem: item.numberOfItem - 1,
            }
          : item;
      });
      return {
        ...state,
        fruitCart: decQuantity,
      };

    case ActionTypes.REMOVE_CART_ITEM:
      const cartItem = [...state.fruitCart];
      const response = cartItem.filter(item => item.id !== payload);
      return {
        ...state,
        fruitCart: response,
      };

    default:
      return state;
  }
};

export default cartReducer;
