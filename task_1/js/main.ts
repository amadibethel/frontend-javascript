// Define the Teacher interface
interface Teacher {
  readonly firstName: string;   // readonly → can only be set at initialization
  readonly lastName: string;    // readonly → can only be set at initialization
  fullTimeEmployee: boolean;    // mandatory
  location: string;             // mandatory
  yearsOfExperience?: number;   // optional
  [key: string]: any;           // allows extra attributes
}

// Example usage
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

const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false, // dynamic property
};

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);
