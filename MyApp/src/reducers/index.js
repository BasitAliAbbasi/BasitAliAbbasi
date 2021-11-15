/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux-immutable';
import authReducer from './authReducers';

const rootReducer = () =>
  combineReducers({
    authData: authReducer,
  });

export default rootReducer;
