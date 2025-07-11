import { sumMajorCredits, sumMinorCredits } from './js/main';

const major1 = { credits: 3, brand: 'Major' } as const;
const major2 = { credits: 4, brand: 'Major' } as const;

const minor1 = { credits: 1, brand: 'Minor' } as const;
const minor2 = { credits: 2, brand: 'Minor' } as const;

console.log('Sum of major credits:', sumMajorCredits(major1, major2));
console.log('Sum of minor credits:', sumMinorCredits(minor1, minor2));
