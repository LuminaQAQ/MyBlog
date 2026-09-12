"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const ansi_escapes_1 = __importDefault(require("ansi-escapes"));
class ScrollList {
    constructor(list) {
        this._selectedRow = 0;
        this.list = [];
        this.list = list;
        process.stdout.write(ansi_escapes_1.default.cursorSavePosition);
        this.render();
    }
    get _getTerminalSize() {
        return {
            cols: process.stdout.columns,
            rows: process.stdout.rows,
        };
    }
    clear() {
        const { rows } = this._getTerminalSize;
        for (let row = 0; row < rows; row++) {
            process.stdout.write(ansi_escapes_1.default.cursorTo(0, row));
            process.stdout.write(ansi_escapes_1.default.eraseLine);
        }
        process.stdout.write(ansi_escapes_1.default.cursorTo(0, 0));
    }
    render() {
        this.clear();
        const { rows } = this._getTerminalSize;
        const visibleList = this.list.slice(this._selectedRow, Math.min(rows + this._selectedRow, this.list.length));
        process.stdout.write(visibleList.join("\n"));
    }
    onKeyInput(name) {
        if (name !== "up" && name !== "down")
            return;
        process.stdout.write(ansi_escapes_1.default.cursorHide);
        if (name === "up") {
            this._selectedRow -= 1;
        }
        else if (name === "down") {
            this._selectedRow += 1;
        }
        const { rows } = this._getTerminalSize;
        this._selectedRow = Math.max(0, Math.min(this._selectedRow, this.list.length - rows));
        this.render();
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
    if (key.sequence === "\x03") {
        list.clear();
        process.exit();
    }
    list.onKeyInput(key.name);
});
