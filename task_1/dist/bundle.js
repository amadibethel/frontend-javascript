/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ (() => {

eval("{\nvar teacher1 = {\n    firstName: 'John',\n    lastName: 'Doe',\n    fullTimeEmployee: true,\n    location: 'London',\n    contract: false,\n};\nconsole.log('Teacher:', teacher1);\nvar director1 = {\n    firstName: 'Jane',\n    lastName: 'Smith',\n    fullTimeEmployee: true,\n    location: 'Paris',\n    numberOfReports: 17,\n};\nconsole.log('Director:', director1);\nvar printTeacher = function (firstName, lastName) {\n    return \"\".concat(firstName.charAt(0), \". \").concat(lastName);\n};\nconsole.log('Printed Teacher:', printTeacher('John', 'Doe')); // Output: J. Doe\n// 5. StudentClass implementation\nvar StudentClass = /** @class */ (function () {\n    function StudentClass(_a) {\n        var firstName = _a.firstName, lastName = _a.lastName;\n        this.firstName = firstName;\n        this.lastName = lastName;\n    }\n    StudentClass.prototype.workOnHomework = function () {\n        return 'Currently working';\n    };\n    StudentClass.prototype.displayName = function () {\n        return this.firstName;\n    };\n    return StudentClass;\n}());\n// Example usage\nvar student = new StudentClass({ firstName: 'Bethel', lastName: 'Amadi' });\nconsole.log('Student Display Name:', student.displayName()); // Bethel\nconsole.log('Student Status:', student.workOnHomework()); // Currently working\n\n\n//# sourceURL=webpack://task_1/./js/main.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;