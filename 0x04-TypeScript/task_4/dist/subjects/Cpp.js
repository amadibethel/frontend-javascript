"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cpp = void 0;
const Subject_1 = require("./Subject");
class Cpp extends Subject_1.Subject {
    getRequirements() {
        return 'Here is the list of requirements for Cpp';
    }
    getAvailableTeacher() {
        var _a;
        if (((_a = this.teacher) === null || _a === void 0 ? void 0 : _a.experienceTeachingC) && this.teacher.experienceTeachingC > 0) {
            return `Available Teacher: ${this.teacher.firstName}`;
        }
        return 'No available teacher';
    }
}
exports.Cpp = Cpp;
