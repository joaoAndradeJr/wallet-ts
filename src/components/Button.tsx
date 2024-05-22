import { ButtonProps } from '../types';

export default function Button({
  type = 'button', value, onClick, disabled = false,
}: ButtonProps) {
  return (
    <button
      type={ type }
      onClick={ onClick }
      disabled={ disabled }
    >
      { value }
    </button>
  );
}
