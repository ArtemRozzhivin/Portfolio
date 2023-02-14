import React from 'react';
import cx from 'clsx';

interface ButtonType {
  className?: string;
  onClick?: () => void;
  children?: any;
  pirmary?: boolean;
  noBackground?: boolean;
  border?: boolean;
  none?: boolean;
}

const Button: React.FC<ButtonType> = ({
  className,
  children,
  onClick,
  pirmary,
  border,
  noBackground,
  none,
}) => {
  return (
    <button
      className={cx(
        'inline-flex justify-center items-center transition-all',
        {
          'p-3 bg-orange rounded-2xl hover:brightness-75': pirmary,
          'rounded-xl p-1 hover:bg-orange': noBackground,
          'p-2 border-solid border-2 text-orange rounded-2xl border-orange hover:text-white hover:bg-orange transition-all':
            border,
          ' hover:bg-none active:bg-inherit focus:bg-inherit': none,
        },
        className,
      )}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
