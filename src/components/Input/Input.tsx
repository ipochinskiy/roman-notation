import React, { ChangeEvent } from 'react';

import styles from './Input.module.scss';

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> & {
  type?: string;
  onChange: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
  fullWidth?: boolean;
};

export const Input: React.FC<InputProps> = ({ type = 'text', onChange, fullWidth = false, ...props }) => {
  const wrappedOnChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value, e);

  const classList = [styles.input, fullWidth ? styles['input--fullWidth'] : undefined];

  return <input {...props} className={classList.join(' ')} type={type} onChange={wrappedOnChange} />;
};
