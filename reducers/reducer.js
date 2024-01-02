// reducers.js
import  combineReducers  from '@reduxjs/toolkit';
import  userReducer  from '../action/action';

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;