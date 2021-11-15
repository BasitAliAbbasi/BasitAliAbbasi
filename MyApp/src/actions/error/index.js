/* eslint-disable prettier/prettier */
import {createAction} from '../../../utils';
import {ERROR} from './types';

export const error = {
  clear: data =>
    createAction(ERROR.CLEAR, {
      ...data,
    }),
  set: data =>
    createAction(ERROR.SET, {
      ...data,
    }),
  update: data =>
    createAction(ERROR.UPDATE, {
      ...data,
    }),
};
