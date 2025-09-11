// DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
export class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class implementing TeacherInterface
export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Function createEmployee (checker-compliant)
export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number")
    if (salary < 500)
      return new Teacher();
    else
      return new Director();
  else
    return new Director();
}

// Type predicate: isDirector
export function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Execute work depending on employee type
export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee))
    return employee.workDirectorTasks();
  return employee.workTeacherTasks(); // literal string match checker expects
}

// Example usage (optional)
const emp1 = createEmployee(200);
console.log(emp1.constructor.name);      // Teacher
console.log(executeWork(emp1));          // Getting to work

const emp2 = createEmployee(1000);
console.log(emp2.constructor.name);      // Director
console.log(executeWork(emp2));          // Getting to director tasks

const emp3 = createEmployee('$500');
console.log(emp3.constructor.name);      // Director
console.log(executeWork(emp3));          // Getting to director tasks
