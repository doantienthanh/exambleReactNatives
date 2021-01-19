import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';
export const UserTypes = makeConstantCreator(
  'GET_USER_PROFILE',
  'GET_USER_PROFILE_SUCCESS',
  'GET_USER_PROFILE_FAILURE',
);
const getUserProfile = () => makeActionCreator(UserTypes.GET_USER_PROFILE);
const getUSerProfileSuccess = (response) =>
  makeActionCreator(UserTypes.GET_USER_PROFILE_SUCCESS, { response });
const getUSerProfileFailure = (error) =>
  makeActionCreator(UserTypes.GET_USER_PROFILE_FAILURE, { error });

export default {
  getUserProfile,
  getUSerProfileSuccess,
  getUSerProfileFailure,
};
