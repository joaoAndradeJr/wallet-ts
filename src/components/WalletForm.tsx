import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { GlobalState } from '../types';
import { FORM_INITIAL_STATE, methods, tags } from '../services/typos';
import Input from './Input';
import Select from './Select';
import Button from './Button';

function WalletForm() {
  const [state, setState] = useState(FORM_INITIAL_STATE);
  const { currencies } = useSelector(({ wallet }: GlobalState) => wallet);

  const handleChange = ({ target }:
  React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

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
        onClick={ () => console.log('Adicionando despesa') }
      />
    </form>
  );
}

export default WalletForm;
