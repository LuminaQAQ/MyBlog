import readline, { Key } from "node:readline";
import ansiEscapes from "ansi-escapes";
import EventEmitter from "node:events";
import { TextQuestion } from "./TextPrompt";
import { SelectQuestion } from "./SelectPrompt";

export interface BaseQuestion {
  name: string;
  message: string;
  initial?: string;
  value?: string | number;
  type: "text" | "select";
}

export type QuestionObject = TextQuestion | SelectQuestion;

export abstract class Prompt extends EventEmitter {
  value: string | number = "";

  rl: readline.Interface;

  constructor() {
    super();

    readline.emitKeypressEvents(process.stdin);
    this.rl = readline.createInterface({ input: process.stdin });
    process.stdin.setRawMode(true);

    process.stdout.write(ansiEscapes.cursorSavePosition);

    process.stdin.on("keypress", this.onKeyPress);
  }

  abstract onKeyInput(str: string, key: Key): void;

  onEnterKey(): void {}

  clear() {
    process.stdout.write(ansiEscapes.cursorHide);

    process.stdout.write(ansiEscapes.cursorRestorePosition);
    process.stdout.write(ansiEscapes.cursorTo(0));
    process.stdout.write(ansiEscapes.eraseLine);

    process.stdout.write(ansiEscapes.cursorShow);
  }

  close() {
    process.stdin.removeListener("keypress", this.onKeyPress);
    process.stdin.setRawMode(false);

    process.stdout.write(ansiEscapes.cursorDown(1) + ansiEscapes.cursorTo(0));

    this.rl.close();
    this.emit("submit", this.value);
  }

  private onKeyPress = (str: string, key: Key): void => {
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
}
