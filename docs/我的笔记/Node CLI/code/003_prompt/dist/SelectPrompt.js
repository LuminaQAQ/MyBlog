"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectPrompt = void 0;
const Prompt_1 = require("./Prompt");
const chalk_1 = __importDefault(require("chalk"));
const ansi_escapes_1 = __importDefault(require("ansi-escapes"));
class SelectPrompt extends Prompt_1.Prompt {
    constructor(options) {
        super();
        this.options = options;
        this.cur = 0;
    }
    onEnterKey() {
        this.value =
            this.value ||
                this.options.initial ||
                this.options.choices[this.cur] ||
                "";
        process.stdout.write(ansi_escapes_1.default.cursorSavePosition);
        for (let i = 0; i < this.options.choices.length; i++) {
            process.stdout.write(ansi_escapes_1.default.cursorDown(1) +
                ansi_escapes_1.default.cursorTo(0) +
                ansi_escapes_1.default.eraseLine);
        }
        process.stdout.write(ansi_escapes_1.default.cursorRestorePosition);
    }
    onKeyInput(str, key) {
        if (key.name === "down" || key.name === "right") {
            this.cur += 1;
        }
        else if (key.name === "up" || key.name === "left") {
            this.cur -= 1;
        }
        else {
            return;
        }
        this.cur = Math.max(0, Math.min(this.cur, this.options.choices.length - 1));
        this.value = this.options.choices[this.cur];
        this.render();
    }
    render() {
        this.clear();
        const question = `${chalk_1.default.blue("?")} ${this.options.message} ${chalk_1.default.gray(">")} ${this.value ? this.value : chalk_1.default.gray(this.options.initial || "")}`;
        const choices = this.options.choices
            .map((item, i) => {
            return `${this.cur === i ? chalk_1.default.blue(">") : " "}\t${chalk_1.default.green(item)}`;
        })
            .join(ansi_escapes_1.default.cursorDown(1) + ansi_escapes_1.default.cursorTo(0));
        process.stdout.write(question);
        process.stdout.write(ansi_escapes_1.default.cursorSavePosition);
        process.stdout.write(ansi_escapes_1.default.cursorDown(1) +
            ansi_escapes_1.default.cursorTo(0) +
            ansi_escapes_1.default.eraseLine);
        process.stdout.write(choices);
        process.stdout.write(ansi_escapes_1.default.cursorRestorePosition);
    }
}
exports.SelectPrompt = SelectPrompt;
