"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumMajorCredits = sumMajorCredits;
exports.sumMinorCredits = sumMinorCredits;
// Function to sum MajorCredits
function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'Major',
    };
}
// Function to sum MinorCredits
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'Minor',
    };
}
