import { useCallback, useState } from 'react';

type useMemoizedCallbackHookType = {
  value: string;
  error: string;
  doMap: (value: string) => void;
};

export const useMemoizedCallback = (callback: (value: string) => string): useMemoizedCallbackHookType => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const callbackMemo = useCallback(callback, [callback]);

  const doMap = (input: string): void => {
    if (input === '') {
      setValue('');
      setError('');
      return;
    }

    try {
      const convertedValue = callbackMemo(input);
      setValue(convertedValue);
      setError('');
    } catch (e) {
      setValue('');
      setError(e.message);
    }
  };

  return { value, error, doMap };
};
