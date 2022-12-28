import {ActionTypes} from './action/actionType';
import axios from 'axios';

export const fetchProductDetail = () => async Dispatch => {
  try {
    const res = await axios.get(
      'https://grocery-backend-in.vercel.app/products/popular',
    );
    Dispatch({type: ActionTypes.PRODUCT_DATA, payload: res.data});
  } catch (error) {
    Dispatch({});
  }
};
