type ArabicLiteral = {
  name: string;
  value: number;
};

const LITERALS_MAP: ArabicLiteral[] = [
  {
    name: 'I',
    value: 1,
  },
  {
    name: 'IV',
    value: 4,
  },
  {
    name: 'V',
    value: 5,
  },
  {
    name: 'IX',
    value: 9,
  },
  {
    name: 'X',
    value: 10,
  },
  {
    name: 'XL',
    value: 40,
  },
  {
    name: 'L',
    value: 50,
  },
  {
    name: 'XC',
    value: 90,
  },
  {
    name: 'C',
    value: 100,
  },
  {
    name: 'CD',
    value: 400,
  },
  {
    name: 'D',
    value: 500,
  },
  {
    name: 'CM',
    value: 900,
  },
  {
    name: 'M',
    value: 1000,
  },
];

export const ROMAN_LITERALS = LITERALS_MAP.sort((a, b) => b.value - a.value);
