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
