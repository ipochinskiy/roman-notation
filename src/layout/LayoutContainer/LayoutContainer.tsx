import React from 'react';

import { LayoutHeader } from '../LayoutHeader/LayoutHeader';

import styles from './LayoutContainer.module.scss';

export const LayoutContainer: React.FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.layoutHeader}>
        <LayoutHeader />
      </div>
      <section className={styles.layoutSection}>{children}</section>
    </div>
  );
};
