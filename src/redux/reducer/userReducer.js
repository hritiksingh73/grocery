import {ActionTypes} from '../constants/constants';

const initialState = {
  userID: '',
  registerData: [],
  userAddresses: [],
  manageAddressesItemsId: 0,
  productData: [],
};

export const userReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case ActionTypes.REGISTER_DETAILS:
      const {name, email, number, password} = payload;
      console.log('Registerd Details ----->', name, email, number, password);
      return {
        ...state,
        registerData: [
          ...state.registerData,
          {
            Name: name,
            Email: email,
            Number: number,
            Password: password,
          },
        ],
      };

    case ActionTypes.USER_ID:
      return {
        ...state,
        userID: payload,
      };

    case ActionTypes.MANAGE_ADDRESSES:
      // console.log('reducer', userAddresses)
      return {
        ...state,
        userAddresses: [...state.userAddresses, payload],
      };

    case ActionTypes.DELETE_ADDRESS:
      const Items = [...state.userAddresses];
      const response = Items.filter(item => item.addressID !== payload);
      return {
        ...state,
        userAddresses: response,
      };

    case ActionTypes.UPDATE_ADDRESS:
      const data = [...state.userAddresses];
      const index = data.findIndex(value => {
        return value.addressID === payload.ID;
      });
      data.splice(index, 1, {
        addressID: payload.ID,
        ...payload.data,
      });
      return {
        ...state,
        userAddresses: data,
      };

    case ActionTypes.DATA_CALLING:
      return {...state, productData: payload};

    default:
      return state;
  }
};

export default userReducer;
