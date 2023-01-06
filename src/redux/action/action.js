import {ActionTypes} from '../constants/constants';
import axios from 'axios';

export const UserId = val => ({
  type: ActionTypes.USER_ID,
  payload: val,
});

export const registerDetails = (name, email, number, password) => ({
  type: ActionTypes.REGISTER_DETAILS,
  payload: {name, email, number, password},
});

export const AddFruitsToCart = val => ({
  type: ActionTypes.ADD_FRUITS_TO_CART,
  payload: val,
});

export const IncrementCartItem = val => ({
  type: ActionTypes.ITEMS_INCRIMENT,
  payload: val,
});

export const DecrementCartItem = val => ({
  type: ActionTypes.ITEMS_DECREMENT,
  payload: val,
});

export const RemoveCartItem = val => ({
  type: ActionTypes.REMOVE_CART_ITEM,
  payload: val,
});

export const ManageAddresses = val => ({
  type: ActionTypes.MANAGE_ADDRESSES,
  payload: val,
});

export const DeleteAddress = val => ({
  type: ActionTypes.DELETE_ADDRESS,
  payload: val,
});

export const UpdateAddress = (ID, data) => ({
  type: ActionTypes.UPDATE_ADDRESS,
  payload: {ID, data},
});

export const FatchingData = data => {
  return dispatch => {
    try {
      const response = fetch(
        'https://grocery-backend-in.vercel.app/products/popular',
      )
        .then(result => result.json())
        .then(response =>
          dispatch({type: ActionTypes.DATA_CALLING, payload: response}),
        );
    } catch (error) {
      console.log(error);
    }
  };
};
