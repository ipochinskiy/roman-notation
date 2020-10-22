import { mapFromRoman } from './map-from-roman';

describe('mapFromRoman', () => {
  [
    ['I', '1'],
    ['II', '2'],
    ['III', '3'],
    ['IV', '4'],
    ['V', '5'],
    ['VI', '6'],
    ['VII', '7'],
    ['VIII', '8'],
    ['IX', '9'],
    ['X', '10'],
    ['XXXIX', '39'],
    ['XL', '40'],
    ['XLI', '41'],
    ['XLIX', '49'],
    ['L', '50'],
    ['LI', '51'],
    ['LXXXIX', '89'],
    ['XC', '90'],
    ['XCI', '91'],
    ['XCIX', '99'],
    ['C', '100'],
    ['CI', '101'],
    ['CCCXCIX', '399'],
    ['CD', '400'],
    ['CDI', '401'],
    ['CDXCIX', '499'],
    ['D', '500'],
    ['DI', '501'],
    ['CMXCIX', '999'],
    ['M', '1000'],
    ['MI', '1001'],
    ['MCCCXLV', '1345'],
    ['MCDLXIII', '1463'],
    ['MCMXC', '1990'],
    ['MCMXCIX', '1999'],
    ['MM', '2000'],
    ['MMI', '2001'],
  ].forEach(([roman, arabic]) => {
    it(`when given ${roman} should return ${arabic}`, () => {
      expect(mapFromRoman(roman as string)).toEqual(arabic);
    });
  });
});
