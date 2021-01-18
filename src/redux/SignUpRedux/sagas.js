import { put, call, takeLatest } from 'redux-saga/effects';
import SignUpActions, { SignUpTypes } from './actions';
import { startup } from '../AppRedux/actions';
import { userRegisterApi } from '../../api/auth';

export function* userSignUpSaga({ data }) {
  console.log(data);
  try {
    const response = yield call(userRegisterApi, data);
    const newResponse = {
      data: response.data,
      token: response.data.token,
    };
    yield put(SignUpActions.userSignUpSuccess(newResponse));
    yield put(startup());
  } catch (error) {
    console.log(error);
    yield put(SignUpActions.userSignUpFailure(error));
  }
}

const signUpSagas = () => [takeLatest(SignUpTypes.USER_SIGNUP, userSignUpSaga)];
export default signUpSagas();
