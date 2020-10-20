import React from 'react';

import styles from './LayoutOutlet.module.scss';

export const LayoutOutlet: React.FC = ({ children }) => {
  return <div className={styles.outlet}>{children}</div>;
};
