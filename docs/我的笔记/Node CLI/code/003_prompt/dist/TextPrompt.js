"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextPrompt = void 0;
const Prompt_1 = require("./Prompt");
const chalk_1 = __importDefault(require("chalk"));
const ansi_escapes_1 = __importDefault(require("ansi-escapes"));
class TextPrompt extends Prompt_1.Prompt {
    constructor(options) {
        super();
        this.options = options;
        this.cur = 0;
    }
    onEnterKey() {
        this.value = this.value || this.options.initial || "";
        this.render();
    }
    onKeyInput(str, key) {
        var _a;
        if (key.name === "backspace") {
            const str = this.value;
            this.value = str.slice(0, str.length - 1);
        }
        else {
            if (!this.value)
                this.value = "";
            this.value += (_a = key.sequence) !== null && _a !== void 0 ? _a : "";
        }
        this.render();
    }
    render() {
        this.clear();
        const question = `${chalk_1.default.blue("?")} ${this.options.message} ${chalk_1.default.gray(">")} ${this.value ? this.value : chalk_1.default.gray(this.options.initial || "")}`;
        process.stdout.write(question);
        process.stdout.write(ansi_escapes_1.default.cursorSavePosition);
        process.stdout.write(ansi_escapes_1.default.cursorDown(1) +
            ansi_escapes_1.default.cursorTo(0) +
            ansi_escapes_1.default.eraseLine);
        if (!this.value) {
            //   process.stdout.write(ansiEscapes.cursorDown(1) + ansiEscapes.cursorTo(0));
            //   process.stdout.write(ansiEscapes.eraseLine);
            process.stdout.write(chalk_1.default.red("请输入名字"));
        }
        else {
            process.stdout.write(ansi_escapes_1.default.eraseLine);
        }
        process.stdout.write(ansi_escapes_1.default.cursorRestorePosition);
    }
}
exports.TextPrompt = TextPrompt;
