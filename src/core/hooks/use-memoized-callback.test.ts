import { renderHook, act } from '@testing-library/react-hooks';

import { useMemoizedCallback } from './use-memoized-callback';

describe('useMemoizedCallback', () => {
  const CALLBACK = jest.fn().mockImplementation((value: string) => {
    if (value === '1999') {
      return 'MCMXCIX';
    }
    throw new Error('the sky is falling');
  });

  it('should return "value", "error" and "doMap"', () => {
    const { result } = renderHook(() => useMemoizedCallback(CALLBACK));

    expect(result.current).toMatchObject({
      value: '',
      error: '',
      doMap: expect.toBeFunction(),
    });
  });

  describe('when "doMap" is called for the first time', () => {
    it('should call the callback', () => {
      const { result } = renderHook(() => useMemoizedCallback(CALLBACK));

      act(() => result.current.doMap('1999'));

      expect(CALLBACK).toHaveBeenCalledWith('1999');
    });

    describe('and when this callback returns a value', () => {
      it('should set "value"', () => {
        const { result } = renderHook(() => useMemoizedCallback(CALLBACK));

        act(() => result.current.doMap('1999'));

        expect(result.current).toMatchObject({
          value: 'MCMXCIX',
          error: '',
        });
      });

      describe('when "mapToRoman" throws on the second call', () => {
        it('should clear the "value"', () => {
          const { result } = renderHook(() => useMemoizedCallback(CALLBACK));

          act(() => result.current.doMap('1999'));
          act(() => result.current.doMap('0'));

          expect(result.current).toMatchObject({
            value: '',
            error: 'the sky is falling',
          });
        });
      });

      describe('when "doMap" is called with an empty string on the second time', () => {
        it('should clear the "value"', () => {
          const { result } = renderHook(() => useMemoizedCallback(CALLBACK));

          act(() => result.current.doMap('1999'));
          act(() => result.current.doMap(''));

          expect(result.current).toMatchObject({
            value: '',
            error: '',
          });
        });
      });
    });

    describe('and when "mapToRoman" throws', () => {
      it('should set "error"', () => {
        const { result } = renderHook(() => useMemoizedCallback(CALLBACK));

        act(() => result.current.doMap('0'));

        expect(result.current).toMatchObject({
          value: '',
          error: 'the sky is falling',
        });
      });

      describe('when "mapToRoman" returns a value on the second call', () => {
        it('should clear the "error"', () => {
          const { result } = renderHook(() => useMemoizedCallback(CALLBACK));

          act(() => result.current.doMap('0'));
          act(() => result.current.doMap('1999'));

          expect(result.current).toMatchObject({
            value: 'MCMXCIX',
            error: '',
          });
        });

        describe('when "doMap" is called with an empty string on the second time', () => {
          it('should clear the "value"', () => {
            const { result } = renderHook(() => useMemoizedCallback(CALLBACK));

            act(() => result.current.doMap('0'));
            act(() => result.current.doMap(''));

            expect(result.current).toMatchObject({
              value: '',
              error: '',
            });
          });
        });
      });
    });
  });
});
