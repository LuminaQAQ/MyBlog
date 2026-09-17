"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add_1 = require("./add");
const register_1 = require("./register");
const main = () => {
    console.log((0, add_1.add)(1, 2, 3, 4, 5));
};
// main();
console.log((0, register_1.retrieveSourceMapURL)("./index.js"));
//# sourceMappingURL=index.js.map