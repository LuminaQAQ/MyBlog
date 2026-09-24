import { cpus } from "node:os";
import { MessageChannel, MessagePort, Worker } from "node:worker_threads";

interface TunnelMessage {
  id: number;
  res: number;
}

const poolSize = cpus().length;

const workers: Worker[] = [];
const tunnels: MessagePort[] = [];

for (let i = 0; i < poolSize; i++) {
  const { port1, port2 } = new MessageChannel();
  const worker = new Worker("./pool-worker.js");

  worker.postMessage(
    {
      type: "startup",
      id: i,
      channel: port2,
    },
    [port2],
  );

  tunnels.push(port1);
  workers.push(worker);
}

for (let i = 0; i < tunnels.length; i++) {
  tunnels[i].on("message", (msg: TunnelMessage) => {
    console.log(`线程 ${msg.id} 计算出了结果 ${msg.res}`);
  });
}

let curIndex = 0;

function addJob(num: number) {
  const tunnel = tunnels[curIndex];

  tunnel.postMessage({
    value: num,
  });

  curIndex = curIndex >= workers.length - 1 ? 0 : curIndex + 1;
}

for (let i = 0; i < 100; i++) {
  addJob(Math.floor(Math.random() * 1000000));
}
