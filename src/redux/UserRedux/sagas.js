import { put, call, takeLatest } from 'redux-saga/effects';
import GetProfile, { UserTypes } from './actions';
import { getProfile } from '../../api/users';
import { NavigationUtils } from '../../navigation';
export function* getUserProfile({ data }) {
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

const getProfileSagas = () => [takeLatest(UserTypes.GET_USER_PROFILE, getUserProfile)];

export default getProfileSagas();
