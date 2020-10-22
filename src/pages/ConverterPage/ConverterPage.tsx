import React from 'react';

import { ArabicToRomanConverter } from '../../core';
import { LayoutOutlet } from '../../layout';

import styles from './ConverterPage.module.scss';

export const ConverterPage: React.FC = () => {
  return (
    <LayoutOutlet>
      <div className={styles.page}>
        <div className={styles.converter}>
          <ArabicToRomanConverter />
        </div>
      </div>
    </LayoutOutlet>
  );
};
