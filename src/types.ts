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
