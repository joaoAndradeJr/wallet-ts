import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, GlobalState } from '../types';
import { FORM_INITIAL_STATE, methods, tags } from '../services/typos';
import Input from './Input';
import Select from './Select';
import Button from './Button';
import { getCurrencies, setExpense } from '../redux/actions';

function WalletForm() {
  const [state, setState] = useState(FORM_INITIAL_STATE);
  const { currencies } = useSelector(({ wallet }: GlobalState) => wallet);
  const dispatch: DispatchType = useDispatch();

  const handleChange = ({ target }:
  React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(setExpense(state));
    setState((prev) => ({ ...FORM_INITIAL_STATE, id: prev.id + 1 }));
  };

  useEffect(() => {
    dispatch(getCurrencies());
  }, [dispatch]);

  return (
    <form>
      <Input
        type="number"
        label="Valor"
        testId="value-input"
        name="value"
        value={ state.value }
        onChange={ handleChange }
      />
      <Input
        label="Descrição"
        testId="description-input"
        name="description"
        value={ state.description }
        onChange={ handleChange }
      />
      <Select
        options={ currencies }
        name="currency"
        value={ state.currency }
        onChange={ handleChange }
        label="Moeda"
        testId="currency-input"
      />
      <Select
        options={ methods }
        name="method"
        value={ state.method }
        onChange={ handleChange }
        label="Método de pagamento"
        testId="method-input"
      />
      <Select
        options={ tags }
        name="tag"
        value={ state.tag }
        onChange={ handleChange }
        label="Categoria"
        testId="tag-input"
      />
      <Button
        value="Adicionar despesa"
        onClick={ handleSubmit }
      />
    </form>
  );
}

export default WalletForm;
