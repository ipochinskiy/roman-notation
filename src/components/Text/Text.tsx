import React from 'react';

import styles from './Text.module.scss';

type TextColors =
  | 'primary'
  | 'primary-l1'
  | 'primary-l2'
  | 'primary-l3'
  | 'primary-l4'
  | 'primary-d1'
  | 'primary-d2'
  | 'secondary'
  | 'secondary-l1'
  | 'secondary-l2'
  | 'secondary-l3'
  | 'secondary-l4'
  | 'secondary-d1'
  | 'secondary-d2'
  | 'primary-d2'
  | 'tertiary'
  | 'tertiary-l1'
  | 'tertiary-l2'
  | 'tertiary-l3'
  | 'tertiary-l4'
  | 'tertiary-d1'
  | 'tertiary-d2'
  | 'neutral-1'
  | 'neutral-2'
  | 'neutral-3'
  | 'danger'
  | 'success';

export type TextProps = {
  size?: 'small' | 'medium' | 'large';
  color?: TextColors;
};

export const Text: React.FC<TextProps> = ({ children, size = 'medium', color = 'neutral-1' }) => {
  const classNameList = [styles['text'], styles[`size--${size}`], styles[`color--${color}`]];

  return <span className={classNameList.join(' ')}>{children}</span>;
};
