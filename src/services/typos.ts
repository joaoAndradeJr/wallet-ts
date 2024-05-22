export const WALLET_INITIAL_STATE = {
  expenses: [],
  currencies: [],
  idToEdit: 0,
  isEditing: false,
};

export const FORM_INITIAL_STATE = {
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

export const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
export const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
export const SET_EMAIL = 'SET_EMAIL';
export const SET_CURRENCIES = 'SET_CURRENCIES';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
