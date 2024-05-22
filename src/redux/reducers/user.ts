import { AnyAction } from 'redux';

const INITIAL_STATE = {
  user: null,
};

function user(state = INITIAL_STATE, action: AnyAction) {
  switch (action.type) {
    default:
      return state;
  }
}

export default user;
