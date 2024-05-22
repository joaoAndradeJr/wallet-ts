import { AnyAction } from 'redux';

const INITIAL_STATE = {
  expenses: [],
  currencies: [],
  idToEdit: 0,
  isEditing: false,
};

function wallet(state = INITIAL_STATE, action: AnyAction) {
  switch (action.type) {
    default:
      return state;
  }
}

export default wallet;
