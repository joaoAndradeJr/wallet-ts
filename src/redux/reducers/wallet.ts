import { AnyAction } from 'redux';
import { WALLET_INITIAL_STATE } from '../../services/typos';

function wallet(state = WALLET_INITIAL_STATE, action: AnyAction) {
  switch (action.type) {
    default:
      return state;
  }
}

export default wallet;
