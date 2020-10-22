import React from 'react';

import { Card, Input, Text } from '../../../components';
import { useMemoizedCallback } from '../../hooks/use-memoized-callback';
import { mapToRoman } from '../../utils/map-to-roman';

import styles from './ArabicToRomanConverter.module.scss';

export const ArabicToRomanConverter: React.FC = () => {
  const { value, error, doMap } = useMemoizedCallback(mapToRoman);

  return (
    <Card>
      <Input
        data-testid='arabic-input'
        min={1}
        minLength={1}
        placeholder='42'
        type='number'
        fullWidth
        onChange={doMap}
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
  );
};
