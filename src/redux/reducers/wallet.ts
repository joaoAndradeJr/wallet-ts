import { AnyAction } from 'redux';
import { ADD_EXPENSE, REMOVE_EXPENSE, SET_CURRENCIES,
  WALLET_INITIAL_STATE } from '../../services/typos';

function wallet(state = WALLET_INITIAL_STATE, action: AnyAction) {
  switch (action.type) {
    case SET_CURRENCIES:
      return {
        ...state,
        currencies: action.payload,
      };
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case REMOVE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter(({ id }) => id !== action.payload),
      };
    default:
      return state;
  }
}

export default wallet;
