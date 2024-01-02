// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../action/action';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;