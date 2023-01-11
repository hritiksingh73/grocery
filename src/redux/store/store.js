import {
  configureStore,
  getDefaultMiddleware,
  applyMiddleware,
} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';

import userDataReducer from '../reducers/userReducer';
import cartProductReducer from '../reducers/cartProductReducer';
import productsReducer from '../reducers/productsReducer';
import ordersReducer from '../reducers/ordersReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const Store = configureStore({
  reducer: {
    userDataReducer: persistReducer(persistConfig, userDataReducer),
    cartProductReducer: persistReducer(persistConfig, cartProductReducer),
    productsReducer: persistReducer(persistConfig, productsReducer),
    ordersReducer: persistReducer(persistConfig, ordersReducer),
  },
  middleware: getDefaultMiddleware({
    thunk,
    serializableCheck: false,
  }),
});

export default Store;
export const persistor = persistStore(Store);
