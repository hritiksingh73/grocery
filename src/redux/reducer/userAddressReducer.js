import {ActionType} from '../action/ActionType';

const initialState = {
  userAddressList: [],
};

export const userAddressReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_ADDRESS:
    //console.log(action.payload)
      return {...state, userAddressList: [...state.userAddressList, action.payload]};

      // case ActionType.DELETE_ADDRESS:
      // return {
      //   ...state,
      //   userInfo: state.userAddressList.filter(item => item !== action.payload),
      // };

    default:
      return state;
  }
};
export default userAddressReducer;
