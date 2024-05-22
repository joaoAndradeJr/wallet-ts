import { useSelector } from 'react-redux';
import { Expense, GlobalState } from '../types';

function Header() {
  const { email } = useSelector((state: GlobalState) => state.user);
  const { expenses } = useSelector((state: GlobalState) => state.wallet);
  console.log(expenses);

  return (
    <header>
      <h2 data-testid="email-field">{ email }</h2>
      <h2 data-testid="header-currency-field">
        BRL
        {' '}
        <span data-testid="total-field">
          { expenses
            .reduce((acc, { value, currency, exchangeRates }: Expense) => {
              if (exchangeRates && exchangeRates[currency]) {
                const rate = exchangeRates[currency].ask;
                return acc + +value * +rate;
              }
              return acc;
            }, 0).toFixed(2) }
        </span>
      </h2>
    </header>
  );
}

export default Header;
