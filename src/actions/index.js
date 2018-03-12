import {TOGGLE_AUTH} from './types';

export function authenticate(isLoggedIn) {
  return {
    type: TOGGLE_AUTH,
    payload: isLoggedIn
  };
}
