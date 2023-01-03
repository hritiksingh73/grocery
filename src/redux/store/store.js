import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserReducer from '../reducer/UserReducer';
import userAddressReducer from '../reducer/userAddressReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  userInfo: persistReducer(persistConfig, UserReducer),
  userAddress: persistReducer(persistConfig, userAddressReducer),
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
export const persistor = persistStore(store);
