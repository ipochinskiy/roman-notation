import { mapToRoman } from './map-to-roman';

describe('mapToRoman', () => {
  it('when given a 0 should throw', () => {
    expect(() => mapToRoman(0)).toThrow();
  });

  it('when given a negative number should throw', () => {
    expect(() => mapToRoman(-1)).toThrow();
  });

  it('when given a float number should throw', () => {
    expect(() => mapToRoman(1.5)).toThrow();
  });

  [
    ['1', 'I'],
    ['2', 'II'],
    ['3', 'III'],
    ['4', 'IV'],
    ['5', 'V'],
    ['6', 'VI'],
    ['7', 'VII'],
    ['8', 'VIII'],
    ['9', 'IX'],
    ['10', 'X'],
    ['39', 'XXXIX'],
    ['40', 'XL'],
    ['41', 'XLI'],
    ['49', 'XLIX'],
    ['50', 'L'],
    ['51', 'LI'],
    ['89', 'LXXXIX'],
    ['90', 'XC'],
    ['91', 'XCI'],
    ['99', 'XCIX'],
    ['100', 'C'],
    ['101', 'CI'],
    ['399', 'CCCXCIX'],
    ['400', 'CD'],
    ['401', 'CDI'],
    ['499', 'CDXCIX'],
    ['500', 'D'],
    ['501', 'DI'],
    ['999', 'CMXCIX'],
    ['1000', 'M'],
    ['1001', 'MI'],
    ['1345', 'MCCCXLV'],
    ['1463', 'MCDLXIII'],
    ['1990', 'MCMXC'],
    ['1999', 'MCMXCIX'],
    ['2000', 'MM'],
    ['2001', 'MMI'],
  ].forEach(([arabic, roman]) => {
    it(`when given ${arabic} should return ${roman}`, () => {
      expect(mapToRoman(arabic)).toEqual(roman);
    });
  });
});
