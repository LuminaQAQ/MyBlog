import { Key } from "readline";
import { BaseQuestion, Prompt } from "./Prompt";
import chalk from "chalk";
import ansiEscapes from "ansi-escapes";

interface TextQuestion extends BaseQuestion {
  type: "text";
}

export class TextPrompt extends Prompt {
  cur: number = 0;

  constructor(private options: TextQuestion) {
    super();
  }

  onEnterKey(): void {
    this.value = this.value || this.options.initial || "";
    this.render();
  }

  onKeyInput(str: string, key: Key): void {
    if (key.name === "backspace") {
      const str = this.value;
      this.value = str.slice(0, str.length - 1);
    } else {
      if (!this.value) this.value = "";
      this.value += key.sequence ?? "";
    }

    this.render();
  }

  render() {
    this.clear();

    const question = `${chalk.blue("?")} ${this.options.message} ${chalk.gray(">")} ${this.value ? this.value : chalk.gray(this.options.initial || "")}`;

    process.stdout.write(question);

    process.stdout.write(ansiEscapes.cursorSavePosition);

    process.stdout.write(
      ansiEscapes.cursorDown(1) +
        ansiEscapes.cursorTo(0) +
        ansiEscapes.eraseLine,
    );

    if (!this.value) {
      //   process.stdout.write(ansiEscapes.cursorDown(1) + ansiEscapes.cursorTo(0));
      //   process.stdout.write(ansiEscapes.eraseLine);
      process.stdout.write(chalk.red("请输入名字"));
    } else {
      process.stdout.write(ansiEscapes.eraseLine);
    }

    process.stdout.write(ansiEscapes.cursorRestorePosition);
  }
}
