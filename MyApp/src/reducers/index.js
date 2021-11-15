/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux-immutable';
import authReducer from './authReducers';
import errorReducer from './errorReducers';

const rootReducer = () =>
  combineReducers({
    authData: authReducer,
    errorData: errorReducer,
  });

export default rootReducer;
