import React from 'react';
import cx from 'clsx';

type ButtonType = {
  className?: string;
  onClick?: () => void;
  children?: any;
  pirmary?: boolean;
};

const Button: React.FC<ButtonType> = ({ className, children, onClick, pirmary }) => {
  return (
    <button
      className={cx(
        'inline-flex justify-center items-center',
        {
          'p-3 bg-orange rounded-2xl hover:brightness-75': pirmary,
        },
        className,
      )}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
