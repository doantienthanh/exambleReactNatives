import { put, call, takeLatest } from 'redux-saga/effects';
import GetProfile, { UserTypes } from './actions';
import { getProfile, userChangePassword } from '../../api/users';
import { NavigationUtils } from '../../navigation';

export function* getUserProfile() {
  try {
    const response = yield call(getProfile);
    yield put(GetProfile.getUSerProfileSuccess(response.data));
    NavigationUtils.push({
      screen: 'Profile',
      passProps: { fromHome: false },
    });
  } catch (error) {
    console.log(error);
  }
}
export function* userChangePasswords({ data }) {
  try {
    const response = yield call(userChangePassword, data);
    yield put(GetProfile.userChangePasswordSuccess(response.data));
    NavigationUtils.push({
      screen: 'Profile',
      passProps: { fromChangePass: false },
    });
  } catch (error) {
    console.log(error);
  }
}

const getProfileSagas = () => [
  takeLatest(UserTypes.GET_USER_PROFILE, getUserProfile),
  takeLatest(UserTypes.USER_CHANGE_PASSWORD, userChangePasswords),
];

export default getProfileSagas();
