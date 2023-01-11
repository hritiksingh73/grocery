import {
  USER_DATA,
  USER_ID,
  SET_ADDRESS,
  DELETE_ADDRESS,
  EDIT_ADDRESS,
} from '../constants/userTypes';
import {guidGenerator} from '../../utils/helperFunctions';

const initialState = {
  userDetails: {
    fullName: '',
    email: '',
    mobileNumber: '',
    userID: '',
  },
  address: [],
};

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA:
      console.log('user details---->', action.payload);
      return {...state, userDetails: action.payload};

    case USER_ID:
      console.log('Reducer userid --> ', action.payload);
      return {...state, userID: action.payload};

    case SET_ADDRESS:
      let addressWithId = {
        ...action.payload,
        id: guidGenerator(),
      };
      return {...state, address: [...state.address, addressWithId]};

    case DELETE_ADDRESS:
      let deleteData = state.address.filter(
        item => item.id !== action.payload.id,
      );
      return {...state, address: deleteData};

    case EDIT_ADDRESS:
      const indexOfAddressTobeUpdated = state.address.findIndex(
        item => item.id === action.payload.id,
      );
      const updatedAddress = {...action.payload};

      let editAddress = [...state.address];
      editAddress.splice(indexOfAddressTobeUpdated, 1, updatedAddress);
      console.log('edit address-------->', editAddress);
      return {...state, address: editAddress};

    default:
      return state;
  }
};
export default userDataReducer;
