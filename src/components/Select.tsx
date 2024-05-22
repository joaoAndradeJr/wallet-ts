import { SelectProps } from '../types';

export default function Select(
  { label = '', options, name, value, onChange, testId }: SelectProps,
) {
  return (
    <>
      { label && <label htmlFor={ name }>{label}</label> }
      <select
        data-testid={ testId }
        name={ name }
        value={ value }
        onChange={ onChange }
      >
        { options.map((option) => (
          <option key={ option } value={ option }>{option}</option>
        )) }
      </select>
    </>
  );
}
