/* eslint-disable prettier/prettier */
import {createSelector} from 'reselect';

const authState = state => state.get('authData');

const authDataSelector = createSelector(authState, state => {
  const data = state.get('data');

  return data;
});

const fetchingSelector = createSelector(authState, state =>
  state.get('fetching'),
);

const currentUserSelector = createSelector(authState, state =>
  state.get('currentUser'),
);

const errorSelector = createSelector(authState, state => {
  const error = state.get('error');

  return error;
});

export {authDataSelector, fetchingSelector, currentUserSelector, errorSelector};
