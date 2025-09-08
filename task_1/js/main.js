"use strict";
const teacher1 = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'London',
    contract: false,
};
console.log('Teacher:', teacher1);
const director1 = {
    firstName: 'Jane',
    lastName: 'Smith',
    fullTimeEmployee: true,
    location: 'Paris',
    numberOfReports: 17,
};
console.log('Director:', director1);
const printTeacher = (firstName, lastName) => `${firstName.charAt(0)}. ${lastName}`;
console.log('Printed Teacher:', printTeacher('John', 'Doe')); // Output: J. Doe
// 5. StudentClass implementation
class StudentClass {
    constructor({ firstName, lastName }) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework() {
        return 'Currently working';
    }
    displayName() {
        return this.firstName;
    }
}
// Example usage
const student = new StudentClass({ firstName: 'Bethel', lastName: 'Amadi' });
console.log('Student Display Name:', student.displayName()); // Bethel
console.log('Student Status:', student.workOnHomework()); // Currently working
