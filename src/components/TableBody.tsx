import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, GlobalState } from '../types';
import { removeExpense } from '../redux/actions';
import Button from './Button';

export default function TableBody() {
  const { expenses } = useSelector(({ wallet }: GlobalState) => wallet);
  const dispatch: DispatchType = useDispatch();

  const deleteExpense = (id: number) => {
    dispatch(removeExpense(id));
  };

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
              <td>
                <Button
                  value="Excluir"
                  onClick={ () => deleteExpense(id) }
                  testId="delete-btn"
                />
              </td>
            </tr>
          );
        })
      }
    </tbody>
  );
}
