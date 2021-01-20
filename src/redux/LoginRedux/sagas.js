import { put, call, takeLatest } from 'redux-saga/effects';
import LoginActions, { LoginTypes } from './actions';
import { startup } from '../AppRedux/actions';
import { userLoginApi, userLogoutApi } from '../../api/auth';

export function* userLoginSaga({ data }) {
  try {
    const response = yield call(userLoginApi, data);
    const newResponse = {
      data: response.data,
      token: response.data.token,
    };
    console.log(newResponse.token);
    yield put(LoginActions.userLoginSuccess(newResponse));
    yield put(startup());
  } catch (error) {
    console.log(error.status);
    yield put(LoginActions.userLoginFailure(error.status));
  }
}
export function* userLogoutSagas() {
  try {
    const response = yield call(userLogoutApi);
    yield put(startup());
  } catch (error) {
    console.log(error);
  }
}

const loginSagas = () => [
  takeLatest(LoginTypes.USER_LOGIN, userLoginSaga),
  takeLatest(LoginTypes.USER_LOGOUT, userLogoutSagas),
];
export default loginSagas();
