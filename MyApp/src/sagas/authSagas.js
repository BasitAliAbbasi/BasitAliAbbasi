/* eslint-disable prettier/prettier */
import {put, call, takeLatest, all} from 'redux-saga/effects';
import Router from 'next/router';

import {AUTH} from '../actions/auth/types';

import {auth} from '../actions/auth';
// import {snackbar} from '../actions/snackbar';
import {
  login,
  register,
  updateProfile,
  updatePassword,
  uploadImage,
  forgotPassword,
  me,
  logout,
  resetPassword,
  verifyForgotPasswordToken,
  addVoicemail,
  deleteVoicemail,
  support,
} from '../services/user';
import {loader} from '../actions/loader';
import {error} from '../actions/error';

function* handleLogin(action) {
  try {
    yield put(error.clear());
    const {email, password} = action.payload;

    const {data} = yield call(login, email, password);
    // localStorage.setItem('jwtToken', data.accessToken);
    yield call(auth.me);

    yield call(Router.push, '/admin/dashboard');
  } catch (e) {
    console.log(e);
    yield put(auth.failure({error: {...e}}));
    if (e.response.status === 422) {
      yield put(error.set(e.response.data.message));
    }
  }
}

// function* handleRegisterCleanup(action) {
//   try {
//     if (localStorage.getItem('newUserFlag')) {
//       localStorage.removeItem('activeStep');
//       localStorage.removeItem('userSignedUpAlready');
//       localStorage.removeItem('newUserFlag');
//       localStorage.removeItem('userdata');
//       localStorage.removeItem('packageId');
//       localStorage.removeItem('numberInfo');
//       localStorage.removeItem('formDisabled');
//       localStorage.removeItem('signUpColonyNumberCountry');
//       localStorage.removeItem('signUpColonyNumber');
//       const {reload} = action.payload;
//       reload && window.location.reload();
//     }
//   } catch (e) {
//     console.log(e);
//     yield put(auth.failure({error: {...e}}));
//   }
// }

function* handleRegister(action) {
  try {
    const {firstName, lastName, username, email, password, phone} =
      action.payload;

    const {data} = yield call(
      register,
      firstName,
      lastName,
      username,
      email,
      password,
      phone,
    );
    yield put(
      auth.success({
        accessToken: data.accessToken,
        loggedIn: true,
      }),
    );

    yield call(auth.me);
    const {callback} = action.payload;
    if (callback) {
      yield call(callback);
    }
  } catch (e) {
    console.log(e);
    yield put(auth.failure({error: {...e}}));
  }
}

function* handleUpdateProfile(action) {
  try {
    yield put(error.clear());
    const {updateCurrentUser} = action.payload;

    yield put(loader.show());
    const {data} = yield call(updateProfile, updateCurrentUser);
    yield put(loader.hide());

    const {callback} = action.payload;
    if (callback) {
      yield call(callback);
    }
  } catch (e) {
    console.log(e);
    yield put(auth.failure({error: {...e}}));
    if (e.response.status === 422) {
      yield put(error.set(e.response.data.errors));
    }
    yield put(loader.hide());
  }
}

function* handleUpdatePassword(action) {
  try {
    yield put(error.clear());
    const {updateCurrentUser} = action.payload;

    yield put(loader.show());
    yield call(updatePassword, updateCurrentUser);
    yield put(loader.hide());

    const {callback} = action.payload;
    if (callback) {
      yield call(callback);
    }
  } catch (e) {
    console.log(e);
    yield put(auth.failure({error: {...e}}));
    if (e.response.status === 422) {
      yield put(error.set(e.response.data.errors));
    }
    yield put(loader.hide());
  }
}

function* handleUploadImage(action) {
  try {
    const {file} = action.payload;
    yield call(uploadImage, file);
    yield call(auth.me);
    const {data} = yield call(me);
    yield put(auth.success({currentUser: data}));
  } catch (e) {
    console.log(e);
    console.log('Error occurred in UPLOAD_IMAGE');
  }
}

function* handleForgotPassword(action) {
  try {
    const {email, callback} = action.payload;
    const {data} = yield call(forgotPassword, email);
    yield put(auth.success({data}));
    yield call(Router.push, '/');

    yield call(callback);
  } catch (e) {
    console.log(e);
    yield put(auth.failure({error: {...e}}));
  }
}

function* handleResetPassword(action) {
  try {
    yield put(error.clear());
    const {token, email, password} = action.payload;
    const {data} = yield call(resetPassword, email, password, token);
    const {callback} = action.payload;
    if (callback) {
      yield call(callback);
    }
  } catch (e) {
    console.log(e);

    if (e.response.status === 422) {
      yield put(error.set(e.response.data.errors));
    }
  }
}

function* handleResetPasswordTokenVerify(action) {
  try {
    const {token, email} = action.payload;
    const {data} = yield call(verifyForgotPasswordToken, token, email);
    yield call(Router.push, `/reset-password/${token}/${email}`);
  } catch (e) {
    console.log(e);
    yield call(Router.push, '/');
  }
}

function* handleMe() {
  try {
    const {data} = yield call(me);
    yield put(auth.success({currentUser: data}));
  } catch (e) {
    console.log(e);
    yield put(auth.failure({error: {...e}}));
  }
}

function* handleLogout() {
  try {
    yield call(logout);
    yield call(Router.push, '/');
  } catch (e) {
    console.log(e);
    yield put(auth.failure({error: {...e}}));
  }
}

function* handleSupport(action) {
  try {
    const {formData} = action.payload;
    yield call(support, formData);
  } catch (e) {
    console.log(e);
    yield put(auth.failure({error: {...e}}));
  }
}

function* handleAddVoicemail(action) {
  try {
    const {audioFile, callback} = action.payload;
    yield call(addVoicemail, audioFile);

    if (callback) {
      yield call(callback);
    }
    yield put(auth.success({}));
  } catch (e) {
    console.log(e);
    yield put(auth.failure({error: {...e}}));
  }
}

function* handleDeleteVoicemail() {
  try {
    yield call(deleteVoicemail);

    yield put(auth.me());
    yield put(auth.success({}));
  } catch (e) {
    console.log(e);
    yield put(auth.failure({error: {...e}}));
  }
}

function* watchAuthSagas() {
  yield all([
    takeLatest(AUTH.LOGIN, handleLogin),
    takeLatest(AUTH.REGISTER, handleRegister),
    // takeLatest(AUTH.REGISTER_CLEANUP, handleRegisterCleanup),
    takeLatest(AUTH.UPDATE_PROFILE, handleUpdateProfile),
    takeLatest(AUTH.UPDATE_PASSWORD, handleUpdatePassword),
    takeLatest(AUTH.UPLOAD_IMAGE, handleUploadImage),
    takeLatest(AUTH.FORGOT_PASSWORD, handleForgotPassword),
    takeLatest(AUTH.RESET_PASSWORD, handleResetPassword),
    takeLatest(
      AUTH.RESET_PASSWORD_TOKEN_VERIFY,
      handleResetPasswordTokenVerify,
    ),
    takeLatest(AUTH.ME, handleMe),
    takeLatest(AUTH.LOGOUT, handleLogout),
    takeLatest(AUTH.ADD_VOICEMAIL, handleAddVoicemail),
    takeLatest(AUTH.DELETE_VOICEMAIL, handleDeleteVoicemail),
    takeLatest(AUTH.SUPPORT, handleSupport),
  ]);
}

export default watchAuthSagas;
