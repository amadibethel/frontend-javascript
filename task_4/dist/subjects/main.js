"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cpp_1 = require("./Cpp");
const Java_1 = require("./Java");
const React_1 = require("./React");
const cpp = new Cpp_1.Cpp();
const java = new Java_1.Java();
const react = new React_1.React();
const teacher = {
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
