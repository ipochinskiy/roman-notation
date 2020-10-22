import React from 'react';

import { Card, Input, Text } from '../../../components';
import { useRomanConverter } from '../../hooks/use-roman-converter';

import styles from './ArabicToRomanConverter.module.scss';

export const ArabicToRomanConverter: React.FC = () => {
  const { value, error, toRoman } = useRomanConverter();

  return (
    <div className={styles.converter}>
      <Card>
        <Input
          data-testid='arabic-input'
          min={1}
          minLength={1}
          placeholder='42'
          type='number'
          fullWidth
          onChange={toRoman}
        />
        {value && (
          <div className={styles.info} data-testid='info'>
            <Text color='tertiary' size='small'>
              Roman notation:
            </Text>
            <Text color='tertiary' size='large'>
              {value}
            </Text>
          </div>
        )}
        {error && (
          <div className={styles.error} data-testid='error'>
            <Text color='danger'>{error}</Text>
          </div>
        )}
      </Card>
    </div>
  );
};