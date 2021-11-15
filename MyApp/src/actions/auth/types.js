/* eslint-disable prettier/prettier */
import {createActionTypes} from '../../../utils';

export const AUTH = createActionTypes('AUTH', [
  'LOGIN',
  'REGISTER',
  'REGISTER_CLEANUP',
  'UPDATE_PROFILE',
  'UPDATE_PASSWORD',
  'UPLOAD_IMAGE',
  'FORGOT_PASSWORD',
  'RESET_PASSWORD',
  'RESET_PASSWORD_TOKEN_VERIFY',
  'LOGOUT',
  'SUCCESS',
  'FAILURE',
  'ME',
]);

export default AUTH;
