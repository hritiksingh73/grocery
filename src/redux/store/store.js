import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../reducer/reducer';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export default store;
