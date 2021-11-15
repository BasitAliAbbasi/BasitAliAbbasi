/* eslint-disable prettier/prettier */
import {fromJS} from 'immutable';
import {AUTH} from '../actions/auth/types';

const initialState = fromJS({
  list: [],
  fetching: false,
  success: false,
  error: null,
  loggedIn: false,
  currentUser: null,
});

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH.LOGIN:
    case AUTH.REGISTER:
    case AUTH.UPDATE_PROFILE:
    case AUTH.UPDATE_PASSWORD:
    case AUTH.UPLOAD_IMAGE:
    case AUTH.FORGOT_PASSWORD:
    case AUTH.ME:
    case AUTH.LOGOUT:
    case AUTH.SUCCESS:
    case AUTH.FAILURE:
      return state.merge(action.payload);
    default:
      return state;
  }
}
