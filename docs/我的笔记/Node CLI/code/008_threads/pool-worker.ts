import { MessagePort, parentPort } from "node:worker_threads";

interface ParentPortMessage {
  channel: MessagePort;
  id: number;
  type: "startup";
}

function calc(num: number) {
  let total = 0;
  for (let i = 0; i < num; i++) {
    total += i;
  }
  return total;
}

let tunnel: MessagePort;
let id: number;

parentPort?.on("message", (message: ParentPortMessage) => {
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
