import { parentPort } from "node:worker_threads";
const calc = (num) => {
    let total = 0;
    for (let i = 0; i < num; i++) {
        total += i;
    }
    return total;
};
parentPort === null || parentPort === void 0 ? void 0 : parentPort.on("message", (message) => {
    const res = calc(message.value);
    message.channel.postMessage(res);
});
//# sourceMappingURL=node-worker.js.map