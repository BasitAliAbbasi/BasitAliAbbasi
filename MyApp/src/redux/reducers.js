/* eslint-disable prettier/prettier */
// Imports: Dependencies
import {combineReducers} from 'redux';
// Imports: Reducers
import usersReducer from '../redux/users/reducers';
// Redux: Root Reducer
const rootReducer = combineReducers({
  users: usersReducer,
});
// Exports
export default rootReducer;
