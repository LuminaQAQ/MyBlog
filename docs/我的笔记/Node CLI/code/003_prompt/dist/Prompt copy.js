"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_readline_1 = __importDefault(require("node:readline"));
const ansi_escapes_1 = __importDefault(require("ansi-escapes"));
const chalk_1 = __importDefault(require("chalk"));
const node_events_1 = __importDefault(require("node:events"));
function isNonPrintableChar(char) {
    return /^[\x00-\x1F\x7F]$/.test(char);
}
class Prompt extends node_events_1.default {
    constructor(questions) {
        super();
        this._curPrompt = 0;
        process.stdout.write(ansi_escapes_1.default.cursorSavePosition);
        this._questions = questions;
        this.render();
    }
    get _terminalSize() {
        return {
            cols: process.stdout.columns,
            rows: process.stdout.rows,
        };
    }
    clear() {
        const { rows } = this._terminalSize;
        process.stdout.write(ansi_escapes_1.default.cursorHide);
        for (let row = rows; row >= 0; row--) {
            process.stdout.write(ansi_escapes_1.default.cursorTo(0, row));
            process.stdout.write(ansi_escapes_1.default.eraseLine);
        }
        process.stdout.write(ansi_escapes_1.default.cursorShow);
    }
    render() {
        this.clear();
        const prompts = this._questions.slice(0, this._curPrompt + 1);
        const str = prompts
            .map((item) => {
            return `${item.message} > ${(item === null || item === void 0 ? void 0 : item.initial) && !item.value ? chalk_1.default.gray(item.initial) : item.value}`;
        })
            .join("\n");
        // process.stdout.write(ansiEscapes.eraseLine);
        // process.stdout.write(ansiEscapes.cursorTo(0));
        process.stdout.write(str);
        const last = prompts[prompts.length - 1];
        process.stdout.write(ansi_escapes_1.default.cursorBackward(last.initial && !last.value ? last.initial.length : -1));
    }
    onKeyInput(key) {
        // if (name !== "up" && name !== "down") return;
        var _a;
        // process.stdout.write(ansiEscapes.cursorHide);
        // if (name === "up") {
        //   this._selectedRow -= 1;
        // } else if (name === "down") {
        //   this._selectedRow += 1;
        // }
        // this._selectedRow = Math.max(
        //   0,
        //   Math.min(this._selectedRow, this.list.length - 1),
        // );
        const value = this._questions[this._curPrompt].value || "";
        const initialValue = this._questions[this._curPrompt].initial;
        if (!value)
            this._questions[this._curPrompt].value = "";
        if (key.name === "return") {
            this._questions[this._curPrompt].value = value || initialValue || "";
            this._curPrompt += 1;
            if (this._curPrompt >= this._questions.length) {
                this.close();
                return;
            }
            if (!this._questions[this._curPrompt].value)
                this._questions[this._curPrompt].value = "";
        }
        else if (key.name === "backspace") {
            const str = String(value);
            this._questions[this._curPrompt].value = str.slice(0, str.length - 1);
        }
        else if (key.name === "up") {
        }
        else if (key.name === "down") {
        }
        else if (!key.name || !isNonPrintableChar(key.name)) {
            const cur = this._questions[this._curPrompt];
            if (!cur.value)
                cur.value = "";
            cur.value += (_a = key.sequence) !== null && _a !== void 0 ? _a : "";
        }
        // console.log(this._questions[this._curPrompt]);
        this.render();
    }
    close() {
        this.clear();
        process.stdin.setRawMode(false);
        process.stdout.write(ansi_escapes_1.default.clearTerminal);
        process.exit();
    }
}
node_readline_1.default.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
const questions = [
    {
        type: "text",
        name: "name",
        message: `你的名字`,
        initial: `Lumina`,
    },
    {
        type: "number",
        name: "age",
        message: "你的年龄?",
        validate: (value) => (value < 18 ? `未满 18 岁不能使用` : true),
    },
    {
        type: "toggle",
        name: "confirmtoggle",
        message: "性别?",
        active: "男",
        inactive: "女",
    },
    {
        type: "select",
        name: "color",
        message: "喜欢的颜色？",
        choices: [
            { title: "Red", description: "这是红色", value: "#ff0000" },
            { title: "Green", description: "这是绿色", value: "#00ff00" },
            { title: "Yellow", value: "#ffff00" },
            { title: "Blue", value: "#0000ff" },
        ],
    },
    {
        type: "multiselect",
        name: "multicolor",
        message: "选择不喜欢的颜色（多选）",
        choices: [
            { title: "Red", description: "这是红色", value: "#ff0000" },
            { title: "Green", value: "#00ff00" },
            { title: "Yellow", value: "#ffff00" },
            { title: "Blue", value: "#0000ff" },
        ],
    },
    {
        type: "confirm",
        name: "confirmed",
        message: "确认么?",
    },
];
const prompt = new Prompt(questions);
process.stdin.on("keypress", (char, key) => {
    if (key.sequence === "\x03") {
        prompt.close();
    }
    prompt.onKeyInput(key);
    // console.log(key);
});
