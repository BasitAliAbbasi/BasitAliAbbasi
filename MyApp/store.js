/* eslint-disable prettier/prettier */
// Imports: Dependencies
import {createStore, applyMiddleware, compose} from 'redux';
// import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
// Imports: Redux Root Reducer
import rootReducer from './src/reducers/index';
// Imports: Redux Root Saga
import {rootSaga} from './src/sagas';
// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();
// Redux: Store
const middlewares = [sagaMiddleware];
const store = createStore(
  rootReducer(),
  compose(applyMiddleware(...middlewares)),
);
// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);
// Exports
export {store};
