import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import userReducer from '../reducer/userReducer';
import cartReducer from '../reducer/cartReducer';

import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// // const store = configureStore({
// //   reducer: {
// //     user: persistReducer(persistConfig, userReducer),
// //     cartReducer: persistReducer(persistConfig, cartReducer),
// //   },
// // })
// // export default store;
// // export const persistor = persistStore(store);

const store = configureStore({
  reducer: {
    user: userReducer,
    cartReducer: cartReducer,
  },
  middleware: getDefaultMiddleware({
    thunk,
    serializableCheck: false,
  }),
});

export default store;
