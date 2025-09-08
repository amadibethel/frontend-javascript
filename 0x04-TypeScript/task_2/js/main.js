"use strict";
// 3. Director Class implementing DirectorInterface
class Director {
    workFromHome() {
        return 'Working from home';
    }
    getCoffeeBreak() {
        return 'Getting a coffee break';
    }
    workDirectorTasks() {
        return 'Getting to director tasks';
    }
}
// 4. Teacher Class implementing TeacherInterface
class Teacher {
    workFromHome() {
        return 'Cannot work from home';
    }
    getCoffeeBreak() {
        return 'Cannot have a break';
    }
    workTeacherTasks() {
        return 'Getting to work';
    }
}
// 5. Function to create an employee based on salary
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
// 6. Type predicate function to check if employee is Director
function isDirector(employee) {
    return employee.workDirectorTasks !== undefined;
}
// 7. Function to execute work depending on employee type
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
}
// 8. Test outputs
console.log(createEmployee(200)); // Teacher instance
console.log(createEmployee(1000)); // Director instance
console.log(createEmployee('$500')); // Director instance
console.log(executeWork(createEmployee(200))); // Getting to work
console.log(executeWork(createEmployee(1000))); // Getting to director tasks
// 10. Function teachClass that returns a message based on the subject
function teachClass(todayClass) {
    switch (todayClass) {
        case 'Math':
            return 'Teaching Math';
        case 'History':
            return 'Teaching History';
        default:
            // This case will never be reached, but TypeScript requires a default return
            throw new Error('Unknown subject');
    }
}
// Example usage:
console.log(teachClass('Math')); // Output: Teaching Math
console.log(teachClass('History')); // Output: Teaching History
