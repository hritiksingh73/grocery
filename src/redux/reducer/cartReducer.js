import {ActionType} from '../action/ActionType';

const initialState = {
  cartProducts: [],
  quantity: '',
  isFetching: false,

  wishList: [],
  products: [],
};

const cartReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case ActionType.ADD_TO_CART:
      return {
        ...state,
        cartProducts: [...state.cartProducts, {...action.payload, quantity: 1}],
      };

    case ActionType.REMOVE_CART:
      const remove = [...state.cartProducts];
      const removeItem = remove.filter(item => item.id !== payload);
      return {...state, cartProducts: removeItem};

    case ActionType.INCREASE_CART_ITEM:
      const increaseItem = state.cartProducts.map(item => {
        return item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item;
      });
      return {
        ...state,
        cartProducts: increaseItem,
      };

    case ActionType.DECREASE_CART_ITEM:
      const decreaseItem = state.cartProducts.map(item => {
        return item.id === action.payload && item.quantity > 0
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item;
      });
      return {
        ...state,
        cartProducts: decreaseItem,
      };

    case ActionType.ADD_TO_WISHLIST:
      return {...state, wishList: [...state.wishList, action.payload]};

    case ActionType.REMOVE_TO_WISHLIST:
      let removeProduct = [...state.wishList];
      removeProduct.splice(action.index, 1);
      return {...state, wishList: removeProduct};

    case ActionType.GET_PRODUCTS:
      return {...state, products: payload};

    case ActionType.SET_INIT_DATA:
      return {...state, productData: action.payload};

    case ActionType.SET_FETCHING:
      return {...state, isFetching: action.payload};

    default:
      return state;
  }
};

export default cartReducer;
