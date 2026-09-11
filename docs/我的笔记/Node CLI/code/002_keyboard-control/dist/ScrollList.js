"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const ansi_escapes_1 = __importDefault(require("ansi-escapes"));
class ScrollList {
    constructor(list) {
        this.list = [];
        process.stdout.write(ansi_escapes_1.default.cursorSavePosition);
        this.list = list;
        this.render();
    }
    render() {
        process.stdout.write(ansi_escapes_1.default.cursorRestorePosition);
        process.stdout.write(this.list.join("\n"));
    }
    onKeyInput(name) {
        if (name === "up") {
        }
    }
}
readline_1.default.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
const list = new ScrollList([
    "红楼梦",
    "西游记",
    "水浒传",
    "三国演义",
    "儒林外史",
    "金瓶梅",
    "聊斋志异",
    "白鹿原",
    "平凡的世界",
    "围城",
    "活着",
    "百年孤独",
    "围城",
    "红高粱家族",
    "梦里花落知多少",
    "倾城之恋",
    "悲惨世界",
    "哈利波特",
    "霍乱时期的爱情",
    "白夜行",
    "解忧杂货店",
    "挪威的森林",
    "追风筝的人",
    "小王子",
    "飘",
    "麦田里的守望者",
    "时间简史",
    "人类简史",
    "活着为了讲述",
    "白夜行",
    "百鬼夜行",
]);
process.stdin.on("keypress", (str, key) => {
    //   console.log(str, key);
    if (key.sequence === "\x03") {
        process.exit();
    }
    list.onKeyInput(key.name);
});
