import { Key } from "readline";
import { BaseQuestion, Prompt } from "./Prompt";
import chalk from "chalk";
import ansiEscapes from "ansi-escapes";

export interface SelectQuestion extends BaseQuestion {
  type: "select";
  choices: string[];
}

export class SelectPrompt extends Prompt {
  cur: number = 0;

  constructor(private options: SelectQuestion) {
    super();
  }

  onEnterKey(): void {
    this.value =
      this.value ||
      this.options.initial ||
      this.options.choices[this.cur] ||
      "";

    process.stdout.write(ansiEscapes.cursorSavePosition);

    for (let i = 0; i < this.options.choices.length; i++) {
      process.stdout.write(
        ansiEscapes.cursorDown(1) +
          ansiEscapes.cursorTo(0) +
          ansiEscapes.eraseLine,
      );
    }

    process.stdout.write(ansiEscapes.cursorRestorePosition);
  }

  onKeyInput(str: string, key: Key): void {
    if (key.name === "down" || key.name === "right") {
      this.cur += 1;
    } else if (key.name === "up" || key.name === "left") {
      this.cur -= 1;
    } else {
      return;
    }

    this.cur = Math.max(0, Math.min(this.cur, this.options.choices.length - 1));
    this.value = this.options.choices[this.cur];

    this.render();
  }

  render() {
    this.clear();

    const question = `${chalk.blue("?")} ${this.options.message} ${chalk.gray(">")} ${this.value ? this.value : chalk.gray(this.options.initial || "")}`;
    const choices = this.options.choices
      .map((item, i) => {
        return `${this.cur === i ? chalk.blue(">") : " "}\t${chalk.green(item)}`;
      })
      .join(ansiEscapes.cursorDown(1) + ansiEscapes.cursorTo(0));

    process.stdout.write(question);
    process.stdout.write(ansiEscapes.cursorSavePosition);
    process.stdout.write(
      ansiEscapes.cursorDown(1) +
        ansiEscapes.cursorTo(0) +
        ansiEscapes.eraseLine,
    );

    process.stdout.write(choices);

    process.stdout.write(ansiEscapes.cursorRestorePosition);
  }
}
