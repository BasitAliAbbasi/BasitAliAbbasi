/* eslint-disable prettier/prettier */
import {all, fork} from '@redux-saga/core/effects';
import watchAuthSagas from './authSagas';

export default function* rootSaga() {
  yield all([fork(watchAuthSagas)]);
}
