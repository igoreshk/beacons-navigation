import { SET_LOGGED_IN, SET_LOGGED_OUT } from './authorization/actionTypes';

export const setLoggedIn = () => ({
  type: SET_LOGGED_IN
});

export const setLoggedOut = () => ({
  type: SET_LOGGED_OUT
});
