// src/lib/countries.ts

export type CountryVisa = {
  label: string
  value: string
  capital: string
  flag: string
}

export const countries: CountryVisa[] = [
  {
    label: 'Kenya',
    value: 'kenya',
    capital: 'Nairobi',
    flag: '🇰🇪',
  },
  {
    label: 'USA',
    value: 'usa',
    capital: 'Washington, D.C.',
    flag: '🇺🇸',
  },
  {
    label: 'UK',
    value: 'uk',
    capital: 'London',
    flag: '🇬🇧',
  },
]
