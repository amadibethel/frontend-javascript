// 1. Teacher Interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

const teacher1: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  contract: false,
};

console.log(teacher1);

// 2. Directors Interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'Jane',
  lastName: 'Smith',
  location: 'Paris',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// 3. printTeacher function and interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe")); // Output: J. Doe
