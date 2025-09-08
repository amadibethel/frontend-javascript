// Declare a branded type for MajorCredits
interface MajorCredits {
  credits: number;
  brand: 'Major';
}

// Declare a branded type for MinorCredits
interface MinorCredits {
  credits: number;
  brand: 'Minor';
}

// Function to sum MajorCredits
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'Major',
  };
}

// Function to sum MinorCredits
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'Minor',
  };
}
