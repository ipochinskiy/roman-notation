import { ROMAN_LITERALS } from '../domain/roman-literals';

const isValidArabicNumber = (arabicNumber: number): boolean => {
  const isValidNumber = !Number.isNaN(arabicNumber);
  const isInteger = Math.floor(arabicNumber) === arabicNumber;
  const isGreaterMin = arabicNumber > 0;

  return isValidNumber && isInteger && isGreaterMin;
};

export const mapToRoman = (arabic: string): string => {
  let arabicNumeral = Number(arabic);

  if (!isValidArabicNumber(arabicNumeral)) {
    throw new Error('Please type in an integer number greater that 1');
  }

  let result = '';

  let i = 0;
  while (arabicNumeral > 0 && i < ROMAN_LITERALS.length) {
    const currentLiteral = ROMAN_LITERALS[i];

    if (currentLiteral.value <= arabicNumeral) {
      result += currentLiteral.name;
      arabicNumeral -= currentLiteral.value;
    } else {
      i++;
    }
  }

  return result;
};
