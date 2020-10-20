import React from 'react';

import { Text } from '../../components';

import styles from './LayoutHeader.module.scss';

export const LayoutHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <Text color='neutral-3' size='large'>
        Learn Roman notation
      </Text>
    </header>
  );
};
