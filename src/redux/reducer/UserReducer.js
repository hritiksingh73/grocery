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
  wishList: [],

  userAddressList: [],
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

    case ActionType.WISHLIST_ITEM:
      //console.log("Wishlist Data=====>>>",action.payload)
      return {
        ...state,
        wishlist: [...state.wishList, action.payload],
      };
      

    case ActionType.REMOVE_WISHLIST_ITEM:
      let clearWishList = [...state.wishList];
      clearWishList.splice(action.index, 1);
      return {...state, wishList: clearWishList};

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
    /////////////////Address Section///////////////////////
    case ActionType.UPDATE_ADDRESS:
      const idxOfAddressTobeUpdated = state.userAddressList.findIndex(
        item => item.id === action.payload.id,
      );

      let currentAddress = [...state.userAddressList];
      currentAddress.splice(idxOfAddressTobeUpdated, 1, action.payload);

      return {
        ...state,
        userAddressList: currentAddress,
      };

    case ActionType.DELETE_ADDRESS:
      return {
        ...state,
        userAddressList: state.userAddressList.filter(
          item => item !== action.payload,
        ),
      };

    case ActionType.ADD_ADDRESS:
      //console.log(action.payload)
      return {
        ...state,
        userAddressList: [...state.userAddressList, action.payload],
      };

    default:
      return state;
  }
};

export default userReducer;
