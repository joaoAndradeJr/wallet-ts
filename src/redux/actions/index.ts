import { SET_EMAIL } from '../../services/typos';

export const setEmail = (email: string) => ({
  type: SET_EMAIL,
  payload: email,
});
