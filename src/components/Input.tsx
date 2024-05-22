import { InputProps } from '../types';

export default function Input({
  type = 'text', label = '', testId, name, value, onChange,
}: InputProps) {
  return (
    <>
      { label && <label htmlFor={ name }>{ label }</label> }
      <input
        type={ type }
        name={ name }
        value={ value }
        onChange={ onChange }
        data-testid={ testId }
      />
    </>
  );
}
