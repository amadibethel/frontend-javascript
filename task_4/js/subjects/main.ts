import { Cpp } from './Cpp';
import { Java } from './Java';
import { React } from './React';
import { Teacher } from './Teacher';

const cpp = new Cpp();
const java = new Java();
const react = new React();

const teacher: Teacher = {
  firstName: 'Bethel',
  lastName: 'Amadi',
  experienceTeachingC: 10,
  experienceTeachingJava: 5,
  experienceTeachingReact: 0,
};

cpp.teacher = teacher;
java.teacher = teacher;
react.teacher = teacher;

console.log('C++:', cpp.getRequirements());
console.log('C++:', cpp.getAvailableTeacher());

console.log('Java:', java.getRequirements());
console.log('Java:', java.getAvailableTeacher());

console.log('React:', react.getRequirements());
console.log('React:', react.getAvailableTeacher());
