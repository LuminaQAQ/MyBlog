"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prompt = void 0;
const node_readline_1 = __importDefault(require("node:readline"));
const ansi_escapes_1 = __importDefault(require("ansi-escapes"));
const node_events_1 = __importDefault(require("node:events"));
class Prompt extends node_events_1.default {
    constructor() {
        super();
        this.value = "";
        this.onKeyPress = (str, key) => {
            if (key.sequence === "\x03") {
                process.exit();
            }
            if (key.name === "return") {
                this.onEnterKey();
                this.close();
                return;
            }
            this.onKeyInput(str, key);
        };
        node_readline_1.default.emitKeypressEvents(process.stdin);
        this.rl = node_readline_1.default.createInterface({ input: process.stdin });
        process.stdin.setRawMode(true);
        process.stdout.write(ansi_escapes_1.default.cursorSavePosition);
        process.stdin.on("keypress", this.onKeyPress);
    }
    onEnterKey() { }
    clear() {
        process.stdout.write(ansi_escapes_1.default.cursorHide);
        process.stdout.write(ansi_escapes_1.default.cursorRestorePosition);
        process.stdout.write(ansi_escapes_1.default.cursorTo(0));
        process.stdout.write(ansi_escapes_1.default.eraseLine);
        process.stdout.write(ansi_escapes_1.default.cursorShow);
    }
    close() {
        process.stdin.removeListener("keypress", this.onKeyPress);
        process.stdin.setRawMode(false);
        process.stdout.write(ansi_escapes_1.default.cursorDown(1) + ansi_escapes_1.default.cursorTo(0));
        this.rl.close();
        this.emit("submit", this.value);
    }
}
exports.Prompt = Prompt;
