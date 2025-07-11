"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.React = void 0;
const Subject_1 = require("./Subject");
class React extends Subject_1.Subject {
    getRequirements() {
        return 'Here is the list of requirements for React';
    }
    getAvailableTeacher() {
        var _a;
        if (((_a = this.teacher) === null || _a === void 0 ? void 0 : _a.experienceTeachingReact) && this.teacher.experienceTeachingReact > 0) {
            return `Available Teacher: ${this.teacher.firstName}`;
        }
        return 'No available teacher';
    }
}
exports.React = React;
