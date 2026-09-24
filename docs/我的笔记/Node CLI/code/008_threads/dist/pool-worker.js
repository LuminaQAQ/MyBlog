import { parentPort } from "node:worker_threads";
function calc(num) {
    let total = 0;
    for (let i = 0; i < num; i++) {
        total += i;
    }
    return total;
}
let tunnel;
let id;
parentPort === null || parentPort === void 0 ? void 0 : parentPort.on("message", (message) => {
    if (message.type === "startup") {
        id = message.id;
        tunnel = message.channel;
        tunnel.on("message", (msg) => {
            tunnel.postMessage({
                id,
                res: calc(msg.value),
            });
        });
    }
});
//# sourceMappingURL=pool-worker.js.map