import {ActionType} from '../action/ActionType';
import {guidGenerator} from '../../utils/guidGenerator.jsx';

const initialState = {
  userRecord: {
    fullname: '',
    email: '',
    mobileno: '',
    uid: '',
    userID: '',
  },
  userAddress: [],
  // userAddress: [
  //   {
  //     id: 0,
  //     firstname: 'Moosa',
  //     lastname: 'Abdul Rehman',
  //     house: '2nd Floor',
  //     area: 'Building',
  //     address: 'WayNo 3109',
  //     block: 'Building No 475',
  //     street: 'Muskat',
  //     mobileno: '9012121212',
  //   }
  // ]
};

const userReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case ActionType.USER_DETAILS:
      // console.log('user details----->', action.payload);
      return {
        ...state,
        userRecord: payload,
      };

    case ActionType.USER_ID:
      return {
        ...state,
        userID: payload,
      };

    case ActionType.ADD_USER:
      //console.log(action.payload);

      return {...state, userAddress: [...state.userAddress, action.payload]};

    case ActionType.EDIT_USER:
      //console.log(action.payload);
      const addressUpdated = state.userAddress.findIndex(
        item => item.id === action.payload.id,
      );
      let currentAddress = [...state.userAddress];
      currentAddress.splice(addressUpdated, 1, action.payload);

      return {
        ...state,
        userAddress: currentAddress,
      };

    case ActionType.DELETE_USER:
      return {
        ...state,
        userAddress: state.userAddress.filter(item => item !== payload),
      };

    default:
      return state;
  }
};

export default userReducer;
