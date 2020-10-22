import { ROMAN_LITERALS } from '../domain/roman-literals';

export const mapFromRoman = (roman: string): string => {
  let result = 0;
  const errorMessage = `"${roman}" is not a valid Roman numeral`;

  let i = 0;
  while (roman.length > 0 && i < ROMAN_LITERALS.length) {
    const currentLiteral = ROMAN_LITERALS[i];

    if (roman.startsWith(currentLiteral.name)) {
      result += currentLiteral.value;
      roman = roman.slice(currentLiteral.name.length);
    } else {
      i++;
    }
  }

  if (roman.length > 0) {
    throw new Error(errorMessage);
  }

  return String(result);
};
