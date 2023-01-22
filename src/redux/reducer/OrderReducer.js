import {ActionType} from '../action/ActionType';
const InitialState = {
  orders: {
    // selectedDeliveryAddress:{},
    // orderDetails:{},
    // deliveryDateSlot:{},
    // deliveryTimeSlot:{},
    // orderID:'',
  },
  orderHistory: [],
};

const userReducer = (state = InitialState, action) => {
  switch (action.type) {
    /////////////////Address Section/////////////////

    case ActionType.SELECTED_DELIVERY_ADDRESS:
      //console.log("SELECTED_DELIVERY_ADDRESS from Reducer======>>>>>",action.payload);
      return {
        ...state,
        orders: {...state.orders, selectedDeliveryAddress: action.payload},
      };

    case ActionType.SELECTED_DELIVERY_DATE:
      //console.log("SELECTED_DELIVERY_DATE from Reducer======>>>>>",action.payload);
      return {
        ...state,
        orders: {...state.orders, deliveryDateSlot: action.payload},
      };

    case ActionType.SELECTED_DELIVERY_TIME:
      //console.log("SELECTED_DELIVERY_TIME from Reducer======>>>>>",action.payload);
      return {
        ...state,
        orders: {...state.orders, deliveryTimeSlot: action.payload},
      };
    case ActionType.ORDER_ID:
      //console.log("ORDER_ID from Reducer======>>>>>",action.payload);
      return {
        ...state,
        orders: {...state.orders, orderID: action.payload},
      };

    case ActionType.PRODUCT_BILLING_DETAILS:
      //console.log("PRODUCT_BILLING_DETAILS from Reducer======>>>>>",action.payload);
      return {
        ...state,
        orders: {...state.orders, orderDetails: action.payload},
      };

    case ActionType.PRODUCT_ORDER_HISTORY:
      //console.log("PRODUCT_ORDER_HISTORY from Reducer======>>>>>",action.payload);
      return {...state, orderHistory: [...state.orderHistory, action.payload]};

    default:
      return state;
  }
};

export default userReducer;
