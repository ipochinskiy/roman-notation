import React from 'react';

import { LayoutOutlet } from '../../layout';

import styles from './ConverterPage.module.scss';

export const ConverterPage: React.FC = () => {
  return (
    <LayoutOutlet>
      <div className={styles.page}>holder</div>
    </LayoutOutlet>
  );
};
