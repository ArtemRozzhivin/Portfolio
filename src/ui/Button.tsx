import React from 'react';
import cx from 'clsx';

interface ButtonType {
  className?: string;
  onClick?: () => void;
  children?: any;
  pirmary?: boolean;
  noBackground?: boolean;
}

const Button: React.FC<ButtonType> = ({ className, children, onClick, pirmary, noBackground }) => {
  return (
    <button
      className={cx(
        'inline-flex justify-center items-center',
        {
          'p-3 bg-orange rounded-2xl hover:brightness-75': pirmary,
          'rounded-xl p-1 hover:bg-orange': noBackground,
        },
        className,
      )}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
