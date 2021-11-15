/* eslint-disable prettier/prettier */
import {fromJS} from 'immutable';
import {ERROR} from '../actions/error/types';

const initialState = fromJS({
  list: [],
});

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case ERROR.UPDATE:
    case ERROR.SET:
    case ERROR.CLEAR:
      return state.merge(action.payload);
    default:
      return state;
  }
}
