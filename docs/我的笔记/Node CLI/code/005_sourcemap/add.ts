export const add = (...args: number[]) => {
  if (args.includes(1)) throw new Error("xxxx");

  return args.reduce((pre, cur) => {
    return pre + cur;
  }, 0);
};
