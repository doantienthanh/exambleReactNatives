import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { UserTypes } from '../UserRedux/actions';

export const INITIAL_STATE = Immutable({
  loadingGetUserProfile: false,
  errorGetUserProfile: null,
  getUserResponse: null,
  userType: '',
});

export const getUserProfile = (state, { response }) =>
  state.merge({ loadingGetUserProfile: true, errorGetUserProfile: null });

export const getUserProfileSuccess = (state, { response }) =>
  state.merge({
    loadingGetUserProfile: false,
    getUserResponse: response,
    userType: 'profile',
    errorGetUserProfile: null,
  });
export const getUserProfileFailure = (state, { error }) =>
  state.merge({ loadingGetUserProfile: false, errorGetUserProfile: error });

const reducer = makeReducerCreator(INITIAL_STATE, {
  [UserTypes.GET_USER_PROFILE]: getUserProfile,
  [UserTypes.GET_USER_PROFILE_SUCCESS]: getUserProfileSuccess,
  [UserTypes.GET_USER_PROFILE_FAILURE]: getUserProfileFailure,
});

export default reducer;
