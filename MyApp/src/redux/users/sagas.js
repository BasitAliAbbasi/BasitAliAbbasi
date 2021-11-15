/* eslint-disable prettier/prettier */
// import {notification} from 'antd';
import {all, call, put, takeEvery} from 'redux-saga/effects';
import {addUsers, deleteUsers, getUsers} from 'services/users';
import actions from './actions';

// export function* ADD_USERS({payload}) {
//   const {restaurantId, name, phoneNumber, email, role} = payload;
//   console.log('payload is user saga', payload);
//   yield put({
//     type: 'users/SET_STATE',
//     payload: {
//       loading: false,
//     },
//   });
//   const success = yield call(
//     addUsers,
//     restaurantId,
//     name,
//     phoneNumber,
//     email,
//     role,
//   );
//   if (success) {
//     const i = restaurantId;

//     yield put({
//       type: 'users/GET_USERS',
//       payload: {
//         restaurantId: i,
//         page: 1,
//         limit: 20,
//       },
//     });
//     notification.success({
//       message: 'User added',
//       description: 'User added successfully',
//     });
//   }
//   if (!success) {
//     console.log('In saga Fail');
//     yield put({
//       type: 'users/SET_STATE',
//       payload: {
//         loading: false,
//       },
//     });
//   }
// }

export function* GET_USERS({payload}) {
  const {page, limit, restaurantId} = payload;
  yield put({
    type: 'users/SET_STATE',
    payload: {
      loading: true,
      success: true,
    },
  });
  const success = yield call(getUsers, page, limit, restaurantId);
  if (success) {
    yield put({
      type: 'users/SET_STATE',
      payload: {
        list: success,
        loading: false,
        success: true,
      },
    });
  }
  if (!success) {
    yield put({
      type: 'users/SET_STATE',
      payload: {
        list: success,
        loading: false,
      },
    });
  }
}

// export function* DELETE_USERS({payload}) {
//   const {restaurantId, userId} = payload;
//   yield put({
//     type: 'users/SET_STATE',
//     payload: {
//       loading: true,
//     },
//   });
//   const success = yield call(deleteUsers, restaurantId, userId);
//   if (success) {
//     const val = restaurantId;
//     yield put({
//       type: 'users/GET_USERS',
//       payload: {
//         page: 1,
//         limit: 20,
//         restaurantId: val,
//       },
//     });
//     notification.success({
//       message: 'User Deleted',
//       description: 'User Deleted successfully',
//     });
//   }
//   if (!success) {
//     yield put({
//       type: 'users/SET_STATE',
//       payload: {
//         loading: false,
//       },
//     });
//   }
// }

export default function* rootSaga() {
  yield all([
    // takeEvery(actions.ADD_USERS, ADD_USERS),
    takeEvery(actions.GET_USERS, GET_USERS),
    // takeEvery(actions.DELETE_USERS, DELETE_USERS),
  ]);
}
