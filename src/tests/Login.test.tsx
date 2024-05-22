import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Login from '../pages/Login';
import App from '../App';

const emailTestId = 'email-input';
const passwordTestId = 'password-input';
const validEmail = 'alguem@email.com.br';
const validPassword = '1234567';
const invalidEmail = 'emailinvalido';
const invalidPassword = '123';

describe('Testes da página de Login', () => {
  it('A página possui 1 input de email, 1 input de senha e 1 botão', () => {
    renderWithRouterAndRedux(<Login />);

    const emailInput = screen.getByTestId(emailTestId);
    const passwordInput = screen.getByTestId(passwordTestId);
    const button = screen.getByRole('button', { name: /entrar/i });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('O botão deve estar desabilitado inicialmente', () => {
    renderWithRouterAndRedux(<Login />);

    const button = screen.getByRole('button', { name: /entrar/i });

    expect(button).toBeDisabled();
  });

  it('O botão deve ser habilitado quando um email e senha válidos são preenchidos', async () => {
    renderWithRouterAndRedux(<Login />);

    const emailInput = screen.getByTestId(emailTestId);
    const passwordInput = screen.getByTestId(passwordTestId);
    const button = screen.getByRole('button', { name: /entrar/i });

    expect(button).toBeDisabled();

    await userEvent.type(emailInput, validEmail);
    await userEvent.type(passwordInput, validPassword);

    expect(button).not.toBeDisabled();
  });

  it('O botão deve estar desabilitado em caso de senha ou email invalidos', async () => {
    renderWithRouterAndRedux(<Login />);

    const emailInput = screen.getByTestId(emailTestId);
    const passwordInput = screen.getByTestId(passwordTestId);
    const button = screen.getByRole('button', { name: /entrar/i });

    expect(button).toBeDisabled();

    await userEvent.type(emailInput, invalidEmail);
    await userEvent.type(passwordInput, invalidPassword);

    expect(button).toBeDisabled();

    await userEvent.clear(emailInput);
    await userEvent.clear(passwordInput);

    await userEvent.type(emailInput, validEmail);
    await userEvent.type(passwordInput, invalidPassword);

    await userEvent.clear(emailInput);
    await userEvent.clear(passwordInput);

    await userEvent.type(emailInput, invalidEmail);
    await userEvent.type(passwordInput, validPassword);

    expect(button).toBeDisabled();
  });

  it('Ao clicar no botão, a rota deve mudar para a página de carteira', async () => {
    renderWithRouterAndRedux(<App />);

    const emailInput = screen.getByTestId(emailTestId);
    const passwordInput = screen.getByTestId(passwordTestId);
    const button = screen.getByRole('button', { name: /entrar/i });

    await userEvent.type(emailInput, validEmail);
    await userEvent.type(passwordInput, validPassword);

    await userEvent.click(button);

    const walletTitle = await screen.findByRole('heading', { name: /brl/i });
    expect(walletTitle).toBeInTheDocument();
  });
});
