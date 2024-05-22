import { AnyAction } from 'redux';
import { SET_EMAIL } from '../../services/typos';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action: AnyAction) {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
}

export default user;
