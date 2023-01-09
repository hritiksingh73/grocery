import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import userReducer from '../reducer/userReducer';
import cartReducer from '../reducer/cartReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// const store = configureStore({
//   reducer: {
//   userData: persistReducer(persistConfig, userReducer),
//   cartData: persistReducer(persistConfig, cartReducer),
// },
//   middleware: getDefaultMiddleware({
//     serializableCheck: false,
//   }),
// });

const rootReducer = combineReducers({
  userData: persistReducer(persistConfig, userReducer),
  cartData: persistReducer(persistConfig, cartReducer),
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
export const persistor = persistStore(store);
