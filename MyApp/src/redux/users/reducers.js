/* eslint-disable prettier/prettier */
// Initial State
import actions from './actions';

const initialState = {
  counter: 0,
};
// Redux: Counter Reducer
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_STATE:
      return {
        ...state,
        ...action.payload,
      };
    default: {
      return state;
    }
  }
};
// Exports
export default usersReducer;
