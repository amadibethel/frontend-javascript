"use strict";
// js/main.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.cTeacher = exports.react = exports.java = exports.cpp = void 0;
const Cpp_1 = require("./subjects/Cpp");
const Java_1 = require("./subjects/Java");
const React_1 = require("./subjects/React");
exports.cpp = new Cpp_1.Cpp();
exports.java = new Java_1.Java();
exports.react = new React_1.React();
exports.cTeacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 10,
};
console.log("C++");
exports.cpp.teacher = exports.cTeacher;
console.log(exports.cpp.getRequirements());
console.log(exports.cpp.getAvailableTeacher());
console.log("Java");
exports.java.teacher = exports.cTeacher;
console.log(exports.java.getRequirements());
console.log(exports.java.getAvailableTeacher());
console.log("React");
exports.react.teacher = exports.cTeacher;
console.log(exports.react.getRequirements());
console.log(exports.react.getAvailableTeacher());
