import {ActionTypes} from '../action/actionType';

const initialState = {
  registrationData: {
    fullName: '',
    email: '',
    Mobileno: '',
    Password: '',
    user: '',
  },
  userLoginData: {
    mail: '',
    pass: '',
  },
  cart: [],
  productDetail: [],
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REGDATA:
      return {
        ...state,
        registrationData: action.payload,
      };
    case ActionTypes.PRODUCT_DATA:
      return {...state, productDetail: action.payload};

    case ActionTypes.USERDATA:
      return {
        ...state,
        userLoginData: action.payload,
      };
    case ActionTypes.ADDCART:
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            ...action.payload,
            quantity: 1,
            //quantity: action.payload.quantity,
          },
        ],
      };
    case ActionTypes.INCREMENT_ITEM:
      let increase = [...state.cart];
      const increaseItem = increase.map(item => {
        return item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item;
      });
      return {
        ...state,
        cart: increaseItem,
      };
    case ActionTypes.DECREMENT_ITEM:
      let decrease = [...state.cart];
      const decreaseItem = decrease.map(item => {
        return item.id === action.payload && item.quantity > 0
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item;
      });

      return {
        ...state,
        cart: decreaseItem,
      };

    case ActionTypes.REMOVE_ITEM:
      const remove = [...state.cart];
      const removeItem = remove.filter(item => item.id !== action.payload);
      return {
        ...state,
        cart: removeItem,
      };

    default:
      return state;
  }
};

export default counterReducer;
