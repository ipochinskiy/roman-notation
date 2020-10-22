import { ROMAN_LITERALS } from '../domain/roman-literals';

const isValidArabicNumber = (arabicNumber: number): boolean => {
  const isValidNumber = !Number.isNaN(arabicNumber);
  const isInteger = Math.floor(arabicNumber) === arabicNumber;
  const isGreaterMin = arabicNumber > 0;

  return isValidNumber && isInteger && isGreaterMin;
};

export const mapToRoman = (arabic: number): string => {
  if (!isValidArabicNumber(arabic)) {
    throw new Error('Please type in an integer number greater that 1');
  }

  let result = '';

  let i = 0;
  while (arabic > 0 && i < ROMAN_LITERALS.length) {
    const currentLiteral = ROMAN_LITERALS[i];

    if (currentLiteral.value <= arabic) {
      result += currentLiteral.name;
      arabic -= currentLiteral.value;
    } else {
      i++;
    }
  }

  return result;
};
