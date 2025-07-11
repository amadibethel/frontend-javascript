"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Java = void 0;
const Subject_1 = require("./Subject");
class Java extends Subject_1.Subject {
    getRequirements() {
        return 'Here is the list of requirements for Java';
    }
    getAvailableTeacher() {
        var _a;
        if (((_a = this.teacher) === null || _a === void 0 ? void 0 : _a.experienceTeachingJava) && this.teacher.experienceTeachingJava > 0) {
            return `Available Teacher: ${this.teacher.firstName}`;
        }
        return 'No available teacher';
    }
}
exports.Java = Java;
