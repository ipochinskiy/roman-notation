import React from 'react';

import { Card, Input, Text } from '../../../components';
import { useMemoizedCallback } from '../../hooks/use-memoized-callback';
import { mapFromRoman } from '../../utils/map-from-roman';

import styles from './RomanToArabicConverter.module.scss';

export const RomanToArabicConverter: React.FC = () => {
  const { value, error, doMap } = useMemoizedCallback(mapFromRoman);

  return (
    <Card>
      <Input data-testid='roman-input' placeholder='XLII' fullWidth onChange={doMap} />
      {value && (
        <div className={styles.info} data-testid='info'>
          <Text color='tertiary' size='small'>
            Arabic number:
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
