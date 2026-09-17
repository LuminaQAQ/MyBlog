export const add = (...args) => {
    if (args.includes(1))
        throw new Error("xxxx");
    return args.reduce((pre, cur) => {
        return pre + cur;
    }, 0);
};
//# sourceMappingURL=add.js.map