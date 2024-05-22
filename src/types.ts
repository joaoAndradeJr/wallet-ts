import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type GlobalState = {
  user: {
    email: string
  };
  wallet: {
    expenses: [];
    currencies: [];
    idToEdit: number;
    isEditing: boolean;
  };
};

export type InputProps = {
  type?: string;
  label?: string;
  testId: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type ButtonProps = {
  type?: 'button' | 'submit';
  value: string;
  onClick: () => void;
  disabled?: boolean;
};

export type DispatchType = ThunkDispatch<GlobalState, unknown, AnyAction>;

export type SelectProps = {
  options: string[];
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
  testId: string;
};

export type Expense = {
  value: string;
  description: string;
  currency: string;
  method: string;
  tag: string;
  id: number;
  exchangeRates?: { [key: string]: ExchangeRate };
};

export type ExchangeRate = {
  code: string;
  codein: string;
  name: string;
  high: string;
  low: string;
  varBid: string;
  pctChange: string;
  bid: string;
  ask: string;
  timestamp: string;
  create_date: string;
};
