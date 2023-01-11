import {
  ADD_CART_PRODUCTS,
  REMOVE_CART_PRODUCTS,
  INCREASE_CART,
  DECREASE_CART,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from '../constants/userTypes';

const initialState = {
  cartProducts: [],
  wishList: [],
  products: [],
};

const cartProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_PRODUCTS:
      return {
        ...state,
        cartProducts: [...state.cartProducts, {...action.payload, qty: 1}],
      };

    case REMOVE_CART_PRODUCTS:
      const removeCart = state.cartProducts.filter(
        product => product.id !== action.payload,
      );
      return {
        ...state,
        cartProducts: removeCart,
      };

    case INCREASE_CART:
      let increaseItem = [...state.cartProducts];
      const increaseQty = increaseItem.map(item => {
        return item.id === action.payload
          ? {
              ...item,
              qty: item.qty + 1,
            }
          : item;
      });
      return {
        ...state,
        cartProducts: increaseQty,
      };

    case DECREASE_CART:
      let decreaseItem = [...state.cartProducts];
      const decreaseQty = decreaseItem.map(item => {
        return item.id === action.payload && item.qty > 0
          ? {
              ...item,
              qty: item.qty - 1,
            }
          : item;
      });
      return {
        ...state,
        cartProducts: decreaseQty,
      };

    case ADD_TO_WISHLIST:
      return {...state, wishList: [...state.wishList, action.payload]};

    case REMOVE_FROM_WISHLIST:
      let removeProduct = [...state.wishList];
      removeProduct.splice(action.index, 1);
      return {...state, wishList: removeProduct};

    default:
      return state;
  }
};
export default cartProductReducer;
