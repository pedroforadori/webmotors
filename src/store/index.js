import { createStore, combineReducers, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';

import cars  from '../reducers/car';
import make  from '../reducers/make';
import model  from '../reducers/model';
import version  from '../reducers/version';
import estado  from '../reducers/estado';
import cidade  from '../reducers/cidade';

import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    cars,
    make,
    model,
    version,
    estado,
    cidade,
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
