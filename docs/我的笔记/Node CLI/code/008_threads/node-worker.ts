import { parentPort } from "node:worker_threads";

interface ParentPortMessage {
  value: number;
  channel: MessagePort;
}

const calc = (num: number) => {
  let total = 0;
  for (let i = 0; i < num; i++) {
    total += i;
  }
  return total;
};

parentPort?.on("message", (message: ParentPortMessage) => {
  const res = calc(message.value);

  message.channel.postMessage(res);
});
