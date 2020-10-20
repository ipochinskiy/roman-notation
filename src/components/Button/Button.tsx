import React from 'react';

import styles from './Button.module.scss';

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  shape?: 'primary' | 'secondary';
};

export const Button: React.FC<ButtonProps> = ({ children, size = 'medium', shape = 'primary' }) => {
  const classNameList = [styles['button'], styles[`size--${size}`], styles[`shape--${shape}`]];

  return <button className={classNameList.join(' ')}>{children}</button>;
};
