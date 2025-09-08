// 1. Teacher Interface

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any; // Allow additional properties
}

const teacher1: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  contract: false,
};

console.log('Teacher:', teacher1);

// 2. Directors Interface extending Teacher

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'Paris',
  numberOfReports: 17,
};

console.log('Director:', director1);

// 3. printTeacher function and interface

interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) =>
  `${firstName.charAt(0)}. ${lastName}`;

console.log('Printed Teacher:', printTeacher('John', 'Doe')); // Output: J. Doe

// 4. StudentClass constructor and class interfaces

interface StudentConstructor {
  firstName: string;
  lastName: string;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// 5. StudentClass implementation

class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass({ firstName: 'Bethel', lastName: 'Amadi' });
console.log('Student Display Name:', student.displayName());     // Bethel
console.log('Student Status:', student.workOnHomework());        // Currently working
