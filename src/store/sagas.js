import { takeLatest, put, call } from 'redux-saga/effects';

import Api from '../services/api';
import Cep from '../services/cep';

function apiGetCar() {
  return Api.get(`/Vehicles?Page=1`);
}

function* asyncGetCar() {
  const response = yield call(apiGetCar);
  yield put({ type: 'SEARCH_CAR', payload: { data: response.data } });
}

function apiGetMake() {
  return Api.get(`/Make`);
}

function* asyncGetMake() {
  const response = yield call(apiGetMake);
  yield put({ type: 'GET_MAKE', payload: { data: response.data } });
}

function apiGetModel(idMake) {
  return Api.get(`/Model?MakeID=${idMake}`);
}

function* asyncGetModel(payload) {
  const response = yield call(apiGetModel, payload.action);
  yield put({ type: 'GET_MODEL', payload: { data: response.data } });
}

function apiGetVersion(idModel) {
  return Api.get(`/Version?ModelID=${idModel}`);
}

function* asyncGetVersion(payload) {
  const response = yield call(apiGetVersion, payload.action);
  yield put({ type: 'GET_VERSION', payload: { data: response.data } });
}

function apiGetEstado() {
  return Cep.get(`/estados`);
}

function* asyncGetEstado() {
  const response = yield call(apiGetEstado);
  yield put({ type: 'GET_ESTADO', payload: { data: response.data } });
}

function apiGetCidade(stateId) {
    return Cep.get(`/estados/${stateId}/municipios`);
  }
  
  function* asyncGetCidade(payload) {
      console.log(payload)
    const response = yield call(apiGetCidade, payload.action);
    debugger
    yield put({ type: 'GET_CIDADE', payload: { data: response.data } });
  }

export default function* root() {
  yield takeLatest('ASYNC_SEARCH_CAR', asyncGetCar);
  yield takeLatest('ASYNC_GET_MAKE', asyncGetMake);
  yield takeLatest('ASYNC_GET_MODEL', asyncGetModel);
  yield takeLatest('ASYNC_GET_VERSION', asyncGetVersion);
  yield takeLatest('ASYNC_GET_ESTADO', asyncGetEstado);
  yield takeLatest('ASYNC_GET_CIDADE', asyncGetCidade);
}
