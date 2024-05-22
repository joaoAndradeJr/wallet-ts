import { request } from '../../services/requests';
import { API_URL, SET_CURRENCIES, SET_EMAIL } from '../../services/typos';
import { DispatchType, Expense } from '../../types';

export const setEmail = (email: string) => ({
  type: SET_EMAIL,
  payload: email,
});

const setCurrencies = (currencies: string[]) => ({
  type: SET_CURRENCIES,
  payload: currencies,
});

export const addExpense = (expense: Expense) => ({
  type: 'ADD_EXPENSE',
  payload: expense,
});

export const getCurrencies = () => async (dispatch: DispatchType) => {
  request(API_URL)
    .then((data) => {
      const currencies = Object.keys(data)
        .filter((currency) => currency !== 'USDT');
      dispatch(setCurrencies(currencies));
    });
};

export const setExpense = (expense: Expense) => async (dispatch: DispatchType) => {
  request(API_URL)
    .then((data) => {
      dispatch(addExpense({ ...expense, exchangeRates: data }));
    });
};
