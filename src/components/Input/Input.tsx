import React, { ChangeEvent } from 'react';

import styles from './Input.module.scss';

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> & {
  type?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
};

export const Input: React.FC<InputProps> = ({ type = 'text', onChange, ...props }) => {
  const wrappedOnChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e, e.target.value);

  return <input {...props} className={styles.input} type={type} onChange={wrappedOnChange} />;
};
