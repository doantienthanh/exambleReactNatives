import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';
export const UserTypes = makeConstantCreator(
  'GET_USER_PROFILE',
  'GET_USER_PROFILE_SUCCESS',
  'GET_USER_PROFILE_FAILURE',
  'USER_CHANGE_PASSWORD',
  'USER_CHANGE_PASSWORD_SUCCESS',
  'USER_CHANGE_PASSWORD_FAILURE',
);
// User get profile
const getUserProfile = () => makeActionCreator(UserTypes.GET_USER_PROFILE);
const getUSerProfileSuccess = (response) =>
  makeActionCreator(UserTypes.GET_USER_PROFILE_SUCCESS, { response });
const getUSerProfileFailure = (error) =>
  makeActionCreator(UserTypes.GET_USER_PROFILE_FAILURE, { error });

//  User Change password
const userChangePassword = (data) => makeActionCreator(UserTypes.USER_CHANGE_PASSWORD, { data });
const userChangePasswordSuccess = (response) =>
  makeActionCreator(UserTypes.USER_CHANGE_PASSWORD_SUCCESS, { response });
const userChangePasswordFailure = (error) =>
  makeActionCreator(UserTypes.USER_CHANGE_PASSWORD_FAILURE, { error });
export default {
  getUserProfile,
  getUSerProfileSuccess,
  getUSerProfileFailure,
  userChangePassword,
  userChangePasswordSuccess,
  userChangePasswordFailure,
};
