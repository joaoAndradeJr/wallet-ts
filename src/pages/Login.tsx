import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Input from '../components/Input';
import Button from '../components/Button';
import { DispatchType } from '../types';
import { setEmail } from '../redux/actions';

function Login() {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const dispatch: DispatchType = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const shouldDisable = () => {
    const { email, password } = state;
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const minPasswordLength = 6;
    return !(emailRegex.test(email) && password.length >= minPasswordLength);
  };

  const handleClick = () => {
    dispatch(setEmail(state.email));
    navigate('/carteira');
  };

  return (
    <form>
      <Input
        label="Email"
        type="email"
        name="email"
        value={ state.email }
        onChange={ handleChange }
        testId="email-input"
      />
      <Input
        label="Senha"
        type="password"
        name="password"
        value={ state.password }
        onChange={ handleChange }
        testId="password-input"
      />
      <Button
        value="Entrar"
        onClick={ handleClick }
        disabled={ shouldDisable() }
      />
    </form>
  );
}

export default Login;
