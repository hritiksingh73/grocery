import {ActionType} from '../action/ActionType';
const InitialState = {
  loginpage: {
    email: '',
    name: '',
    uid: '',
  },
  isFetching: false,
  productData: [],
  cart: [],
};

const userReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.LOGIN_USER:
      return {...state, loginpage: {...action.payload}};

    case ActionType.SET_INIT_DATA:
      return {...state, productData: action.payload};

    case ActionType.SET_FETCHING:
      return {...state, isFetching: action.payload};

    case ActionType.ADD_ITEM:
      return {
        ...state,
        cart: [...state.cart, {...action.payload, quantity: 1}],
      };

    case ActionType.REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter(item => item.quantity === action.payload),
      };

    case ActionType.INCREASE_ITEM_QUANTITY:
      const increaseItem = state.cart.map(item => {
        return item.id === action.payload
          ? {...item, quantity: item.quantity + 1}
          : item;
      });
      return {
        ...state,
        cart: increaseItem,
      };

    case ActionType.DECREASE_ITEM_QUANTITY:
      const decreaseItem = state.cart.map(item => {
        return item.id === action.payload && item.quantity > 0
          ? {...item, quantity: item.quantity - 1}
          : item;
      });
      return {
        ...state,
        cart: decreaseItem,
      };

    default:
      return state;
  }
};

export default userReducer;
