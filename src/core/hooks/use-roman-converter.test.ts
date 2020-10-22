import { renderHook, act } from '@testing-library/react-hooks';

import { mapToRoman } from '../map-utils/map-to-roman';

import { useRomanConverter } from './use-roman-converter';

jest.mock('../map-utils/map-to-roman');

describe('useRomanConverter', () => {
  const setUpMocks = () => {
    const mapToRomanMock = jest.fn().mockImplementation((arg: number) => {
      if (arg === 1999) {
        return 'MCMXCIX';
      }
      throw new Error('the sky is falling');
    });
    (mapToRoman as jest.Mock).mockImplementation(mapToRomanMock);

    return {
      mapToRomanMock,
    };
  };

  it('should return "value", "error" and "toRoman"', () => {
    setUpMocks();

    const { result } = renderHook(useRomanConverter);

    expect(result.current).toMatchObject({
      value: '',
      error: '',
      toRoman: expect.toBeFunction(),
    });
  });

  describe('when "toRoman" is called', () => {
    it('should call "mapToRoman" helper', () => {
      const { mapToRomanMock } = setUpMocks();
      const { result } = renderHook(useRomanConverter);

      act(() => result.current.toRoman('1999'));

      expect(mapToRomanMock).toHaveBeenCalledWith(1999);
    });

    describe('and when "mapToRoman" returns a value', () => {
      it('should set "value"', () => {
        setUpMocks();
        const { result } = renderHook(useRomanConverter);

        act(() => result.current.toRoman('1999'));

        expect(result.current).toMatchObject({
          value: 'MCMXCIX',
          error: '',
        });
      });

      describe('when "mapToRoman" throws on the second call', () => {
        it('should clear the "value"', () => {
          setUpMocks();
          const { result } = renderHook(useRomanConverter);

          act(() => result.current.toRoman('1999'));
          act(() => result.current.toRoman('0'));

          expect(result.current).toMatchObject({
            value: '',
            error: 'the sky is falling',
          });
        });
      });

      describe('when "toRoman" is called with an empty string on the second time', () => {
        it('should clear the "value"', () => {
          setUpMocks();
          const { result } = renderHook(useRomanConverter);

          act(() => result.current.toRoman('1999'));
          act(() => result.current.toRoman(''));

          expect(result.current).toMatchObject({
            value: '',
            error: '',
          });
        });
      });
    });

    describe('and when "mapToRoman" throws', () => {
      it('should set "error"', () => {
        setUpMocks();
        const { result } = renderHook(useRomanConverter);

        act(() => result.current.toRoman('0'));

        expect(result.current).toMatchObject({
          value: '',
          error: 'the sky is falling',
        });
      });

      describe('when "mapToRoman" returns a value on the second call', () => {
        it('should clear the "error"', () => {
          setUpMocks();
          const { result } = renderHook(useRomanConverter);

          act(() => result.current.toRoman('0'));
          act(() => result.current.toRoman('1999'));

          expect(result.current).toMatchObject({
            value: 'MCMXCIX',
            error: '',
          });
        });

        describe('when "toRoman" is called with an empty string on the second time', () => {
          it('should clear the "value"', () => {
            setUpMocks();
            const { result } = renderHook(useRomanConverter);

            act(() => result.current.toRoman('0'));
            act(() => result.current.toRoman(''));

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
