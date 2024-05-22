import { useSelector } from 'react-redux';
import { GlobalState } from '../types';

export default function TableBody() {
  const { expenses } = useSelector(({ wallet }: GlobalState) => wallet);

  return (
    <tbody>
      {
        expenses.map(({
          id, value, description, currency, method, tag, exchangeRates }) => {
          const { name, ask } = exchangeRates[currency];
          return (
            <tr key={ id }>
              <td>{ description }</td>
              <td>{ tag }</td>
              <td>{ method }</td>
              <td>{ (+value).toFixed(2) }</td>
              <td>{ name }</td>
              <td>{ (+ask).toFixed(2) }</td>
              <td>{ ((+ask) * (+value)).toFixed(2) }</td>
              <td>Real</td>
              <td>{ 1 }</td>
            </tr>
          );
        })
      }
    </tbody>
  );
}
