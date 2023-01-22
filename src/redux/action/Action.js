import {ActionType} from './ActionType';

export const addUser = (email, uid, name) => ({
  type: ActionType.LOGIN_USER,
  payload: {email, uid, name},
});

export const addItemToCart = data => ({
  type: ActionType.ADD_ITEM,
  payload: data,
});

export const removeItemFromCart = item => ({
  type: ActionType.REMOVE_ITEM,
  payload: item,
});

export const increaseItemQuantity = item => ({
  type: ActionType.INCREASE_ITEM_QUANTITY,
  payload: item,
});

export const decreaseItemQuantity = item => ({
  type: ActionType.DECREASE_ITEM_QUANTITY,
  payload: item,
});
export const addAddress = ({
  firstName,
  lastName,
  mobileNumber,
  area,
  address,
  street,
  appartment,
  block,
  id,
}) => ({
  type: ActionType.ADD_ADDRESS,
  payload: {
    firstName,
    lastName,
    mobileNumber,
    area,
    address,
    street,
    appartment,
    block,
    id,
  },
});
export const updateAddress = (address, id) => ({
  type: ActionType.UPDATE_ADDRESS,
  payload: address,
  index: id,
});
export const deleteAddress = address => ({
  type: ActionType.DELETE_ADDRESS,
  payload: address,
});
export const selectDeliveryaddress = address => ({
  type: ActionType.SELECTED_DELIVERY_ADDRESS,
  payload: address,
});

export const selectDeliveryDate = date => ({
  type: ActionType.SELECTED_DELIVERY_DATE,
  payload: date,
});
export const selectDeliveryTime = time => ({
  type: ActionType.SELECTED_DELIVERY_TIME,
  payload: time,
});
export const orderId = (id, paymentmethod) => ({
  type: ActionType.ORDER_ID,
  payload: {id, paymentmethod},
});
export const productBillingDetails = (
  CalculateDeliveryCharges,
  CalculateTax,
  CalculateSubTotal,
  cartItem,
) => ({
  type: ActionType.PRODUCT_BILLING_DETAILS,
  payload: {
    CalculateDeliveryCharges,
    CalculateTax,
    CalculateSubTotal,
    cartItem,
  },
});

export const orderHistory = order => ({
  type: ActionType.PRODUCT_ORDER_HISTORY,
  payload: order,
});
export const addItemToWishList = item => ({
  type: ActionType.WISHLIST_ITEM,
  payload: item,
});
export const removeItemFromWishList = index => ({
  type: ActionType.REMOVE_WISHLIST_ITEM,
  payload: index,
});
