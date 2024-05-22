import { ButtonProps } from '../types';

export default function Button({
  type = 'button', value, onClick, disabled = false, testId = '',
}: ButtonProps) {
  return (
    <button
      type={ type }
      onClick={ onClick }
      disabled={ disabled }
      data-testid={ testId }
    >
      { value }
    </button>
  );
}
