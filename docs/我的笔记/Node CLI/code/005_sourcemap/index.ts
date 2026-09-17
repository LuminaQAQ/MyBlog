import { add } from "./add";
import { retrieveSourceMapURL } from "./register";

const main = () => {
  console.log(add(1, 2, 3, 4, 5));
};

// main();

console.log(retrieveSourceMapURL("./index.js"));
