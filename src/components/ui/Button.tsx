import React, { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color?: 'accent' | 'basic' | '';
  className?: 'fill' | 'line' | '';
}

const Button = ({ text, color, className, onClick }: Props) => {
  return (
    <button
      type="button"
      aria-label={color}
      className={`btn btn-${className}`}
      onClick={onClick}
    >
      <span className="btn-text">{text}</span>
    </button>
  );
};

Button.defaultProps = {
  color: 'basic',
  className: 'fill',
};

export default Button;
