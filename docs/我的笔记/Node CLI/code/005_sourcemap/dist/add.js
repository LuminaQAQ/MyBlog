"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
const add = (...args) => {
    if (args.includes(1))
        throw new Error("xxxx");
    return args.reduce((pre, cur) => {
        return pre + cur;
    }, 0);
};
exports.add = add;
//# sourceMappingURL=add.js.map