/**
 * Teacher interface spec:
 * - firstName and lastName: readonly (can only be set at initialization)
 * - fullTimeEmployee: required boolean
 * - yearsOfExperience: optional number
 * - location: required string
 * - allow any extra property (index signature)
 */

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allows additional properties like contract
}

// Valid teacher objects
const teacher1: Teacher = {
  firstName: "Bethel",
  lastName: "Amadi",
  fullTimeEmployee: true,
  location: "South Africa",
};

const teacher2: Teacher = {
  firstName: "Ada",
  lastName: "Obi",
  fullTimeEmployee: false,
  location: "Nigeria",
  yearsOfExperience: 5,
};

// Demonstrates adding an extra property without pre-declaration
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,
};

console.log("teacher1:", teacher1);
console.log("teacher2:", teacher2);
console.log("teacher3:", teacher3);

/**
 * Note:
 * - TypeScript readonly ensures compile-time prevention of re-assignment:
 *   teacher1.firstName = "Another"; // <-- will produce a TypeScript error
 *
 * - The `[key: string]: any` index signature permits adding arbitrary props
 *   (e.g., contract) without additional type declarations.
 */
