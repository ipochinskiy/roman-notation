import { useCallback, useState } from 'react';

import { mapToRoman } from '../map-utils/map-to-roman';

type UseRomanConverterHookType = {
  value: string;
  error: string;
  toRoman: (arabic: string) => void;
};

export const useRomanConverter = (): UseRomanConverterHookType => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const toRomanMemo = useCallback(mapToRoman, [mapToRoman]);

  return {
    value,
    error,
    toRoman: (arabic: string) => {
      if (arabic === '') {
        setValue('');
        setError('');
        return;
      }

      try {
        const convertedValue = toRomanMemo(Number(arabic));
        setValue(convertedValue);
        setError('');
      } catch (e) {
        setValue('');
        setError(e.message);
      }
    },
  };
};
