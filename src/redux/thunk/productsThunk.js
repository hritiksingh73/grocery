import {GET_PRODUCTS} from '../constants/userTypes';

export const getProducts = () => {
  return dispatch => {
    try {
      const api = fetch(
        'https://grocery-backend-in.vercel.app/products/popular',
      )
        .then(result => result.json())
        .then(response => dispatch({type: GET_PRODUCTS, payload: response}));
    } catch (error) {
      console.log(error);
    }
  };
};
