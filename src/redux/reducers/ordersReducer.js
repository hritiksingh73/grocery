import {guidGenerator} from '../../utils/helperFunctions';
import {
  SET_SELECTED_ADDRESS,
  SET_DELIVERY_SLOT,
  SET_PAYMENT,
} from '../constants/userTypes';

const initialState = {
  orders: [
    {
      orderId: '',
      selectedAddress: {},
      deliverySlot: {},
      payment: '',
    },
  ],
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_ADDRESS:
      return {...state, orders: {selectedAddress: action.payload}};

    case SET_DELIVERY_SLOT:
      return {
        ...state,
        orders: {deliverySlot: action.payload},
      };

    case SET_PAYMENT:
      console.log('data--->', action.payload);
      const orderId = {
        ...action.payload,
        id: guidGenerator(),
      };
      return {...state, orders: {payment: orderId}};
    // return {...state, orders: [...state.orders, orderWithID]};

    default:
      return state;
  }
};
export default ordersReducer;
