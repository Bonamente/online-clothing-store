import UserActionTypes from './user.types';

// eslint-disable-next-line import/prefer-default-export
export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
