import React, { useState } from 'react';

import { Card, Input, Text } from '../../components';

import styles from './ArabicToRomanConverter.module.scss';

export const ArabicToRomanConverter: React.FC = () => {
  const [romanValue, setRomanValue] = useState('42');

  const onChangeHandler = (newValue: string) => {
    setRomanValue(newValue);
  };

  return (
    <div className={styles.converter}>
      <Card>
        <Input placeholder='42' type='number' value={romanValue} fullWidth onChange={onChangeHandler} />
        {romanValue && (
          <div className={styles.info}>
            <Text color='tertiary' size='small'>
              Roman notation:
            </Text>
            <Text color='tertiary' size='large'>
              {romanValue}
            </Text>
          </div>
        )}
      </Card>
    </div>
  );
};
