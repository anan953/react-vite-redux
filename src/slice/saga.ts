import { takeLatest, put } from 'redux-saga/effects';
import { globalActions } from '.';

function* initApp() {
  yield put(globalActions.setLoading(false));
}

export function* globalSaga() {
  yield takeLatest(globalActions.initApp.type, initApp);
}
