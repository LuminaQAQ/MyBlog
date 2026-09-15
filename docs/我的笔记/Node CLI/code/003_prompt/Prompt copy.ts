import readline from "node:readline";
import ansiEscapes from "ansi-escapes";
import chalk from "chalk";
import EventEmitter from "node:events";

interface TerminalSize {
  cols: number;
  rows: number;
}

interface BaseQuestion {
  name: string;
  message: string;
  initial?: string;
  value?: string | number;
}

interface TextQuestion extends BaseQuestion {
  type: "text";
}

interface NumberQuestion extends BaseQuestion {
  type: "number";
  validate?: (value: number) => string | boolean;
}

interface ToggleQuestion extends BaseQuestion {
  type: "toggle";
  active?: string;
  inactive?: string;
}

interface Choice {
  title: string;
  description?: string;
  value: string | number;
}

interface SelectQuestion extends BaseQuestion {
  type: "select";
  choices: Choice[];
}

interface MultiselectQuestion extends BaseQuestion {
  type: "multiselect";
  choices: Choice[];
}

interface ConfirmQuestion extends BaseQuestion {
  type: "confirm";
}

type Question =
  | TextQuestion
  | NumberQuestion
  | ToggleQuestion
  | SelectQuestion
  | MultiselectQuestion
  | ConfirmQuestion;

function isNonPrintableChar(char: string) {
  return /^[\x00-\x1F\x7F]$/.test(char);
}

class Prompt extends EventEmitter {
  private _questions: Question[];
  private _curPrompt = 0;

  constructor(questions: Question[]) {
    super();
    process.stdout.write(ansiEscapes.cursorSavePosition);

    this._questions = questions;

    this.render();
  }

  private get _terminalSize(): TerminalSize {
    return {
      cols: process.stdout.columns,
      rows: process.stdout.rows,
    };
  }

  clear() {
    const { rows } = this._terminalSize;

    process.stdout.write(ansiEscapes.cursorHide);
    for (let row = rows; row >= 0; row--) {
      process.stdout.write(ansiEscapes.cursorTo(0, row));
      process.stdout.write(ansiEscapes.eraseLine);
    }
    process.stdout.write(ansiEscapes.cursorShow);
  }

  render() {
    this.clear();

    const prompts = this._questions.slice(0, this._curPrompt + 1);

    const str = prompts
      .map((item) => {
        return `${item.message} > ${item?.initial && !item.value ? chalk.gray(item.initial) : item.value}`;
      })
      .join("\n");

    // process.stdout.write(ansiEscapes.eraseLine);
    // process.stdout.write(ansiEscapes.cursorTo(0));
    process.stdout.write(str);

    const last = prompts[prompts.length - 1];
    process.stdout.write(
      ansiEscapes.cursorBackward(
        last.initial && !last.value ? last.initial.length : -1,
      ),
    );
  }

  onKeyInput(key: readline.Key) {
    // if (name !== "up" && name !== "down") return;

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

    if (!value) this._questions[this._curPrompt].value = "";

    if (key.name === "return") {
      this._questions[this._curPrompt].value = value || initialValue || "";
      this._curPrompt += 1;

      if (this._curPrompt >= this._questions.length) {
        this.close();
        return;
      }

      if (!this._questions[this._curPrompt].value)
        this._questions[this._curPrompt].value = "";
    } else if (key.name === "backspace") {
      const str = String(value);
      this._questions[this._curPrompt].value = str.slice(0, str.length - 1);
    } else if (key.name === "up") {
    } else if (key.name === "down") {
    } else if (!key.name || !isNonPrintableChar(key.name)) {
      const cur = this._questions[this._curPrompt];
      if (!cur.value) cur.value = "";
      cur.value += key.sequence ?? "";
    }

    // console.log(this._questions[this._curPrompt]);

    this.render();
  }

  close() {
    this.clear();
    process.stdin.setRawMode(false);
    process.stdout.write(ansiEscapes.clearTerminal);
    process.exit();
  }
}

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

const questions: Question[] = [
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
    validate: (value: number) => (value < 18 ? `未满 18 岁不能使用` : true),
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
