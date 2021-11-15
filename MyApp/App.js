/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {useDispatch, Provider} from 'react-redux';
import store from './store';

import {auth} from './src/actions/auth';
import {Button} from 'react-native';

// Color Switch Component

const App = () => {
  const dispatch = useDispatch();
  const ApiCalling = () => {
    dispatch(
      auth.login({
        email: 'uk5598060@gmail.com',
        password: 'Uk.5598060',
        deviceName: 'Infinix',
      }),
    );
  };
  return (
    <Provider store={store}>
      <Button onPress={() => ApiCalling()}>Api Calling</Button>
    </Provider>
  );
};
export default App;
