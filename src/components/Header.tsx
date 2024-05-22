import { useSelector } from 'react-redux';
import { GlobalState } from '../types';

function Header() {
  const { email } = useSelector((state: GlobalState) => state.user);
  return (
    <header>
      <h2 data-testid="email-field">{ email }</h2>
      <h2 data-testid="header-currency-field">
        BRL
        {' '}
        <span data-testid="total-field">0</span>
      </h2>
    </header>
  );
}

export default Header;
