"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./js/main");
const major1 = { credits: 3, brand: 'Major' };
const major2 = { credits: 4, brand: 'Major' };
const minor1 = { credits: 1, brand: 'Minor' };
const minor2 = { credits: 2, brand: 'Minor' };
console.log('Sum of major credits:', (0, main_1.sumMajorCredits)(major1, major2));
console.log('Sum of minor credits:', (0, main_1.sumMinorCredits)(minor1, minor2));
