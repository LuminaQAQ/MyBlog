# 003\_实现vite的prompt

本章涉及知识点参考前面章节.

## 基础

### readline.createInterface

可以参考 [Node.js 文档](https://nodejs.cn/api/readline/readline_createinterface_options.html) 的介绍. 此处主要便于控制每一行的状态.

```ts
this.rl = readline.createInterface({ input: process.stdin });

this.rl.close();
```

### EventEmitter

参考 [Node.js 文档](https://nodejs.cn/api/events.html). 此处用于控制事件派发.

```ts
import EventEmitter from "node:events";

class Prompt extends EventEmitter {
  // .......

  close() {
    // ....

    this.emit("submit", this.value);
  }

  // ....
}
```

## 实现基类

### 初始化事件和基本逻辑

此时为初始化环境和初始配置, 事件监听、保存光标位置和终端键盘事件设置.

```ts
export abstract class Prompt extends EventEmitter {
  rl: readline.Interface;

  constructor() {
    super();

    readline.emitKeypressEvents(process.stdin);
    this.rl = readline.createInterface({ input: process.stdin });
    process.stdin.setRawMode(true);

    process.stdout.write(ansiEscapes.cursorSavePosition);

    process.stdin.on("keypress", this.onKeyPress);
  }
}
```

### 实现问题"行"清除逻辑

```ts
export abstract class Prompt extends EventEmitter {
  // ........

  clear() {
    process.stdout.write(ansiEscapes.cursorHide);

    // 回到构造器时保存的光标位置
    process.stdout.write(ansiEscapes.cursorRestorePosition);
    // 回到行首
    process.stdout.write(ansiEscapes.cursorTo(0));
    // 清除本行
    process.stdout.write(ansiEscapes.eraseLine);

    process.stdout.write(ansiEscapes.cursorShow);
  }

  // ........
}
```

### 实现问题回答结束逻辑

即恢复构造器时期设置的参数与逻辑.

```ts
export abstract class Prompt extends EventEmitter {
  // ........

  close() {
    process.stdin.removeListener("keypress", this.onKeyPress);
    process.stdin.setRawMode(false);

    // 新起一行并移动光标标至行首
    process.stdout.write(ansiEscapes.cursorDown(1) + ansiEscapes.cursorTo(0));

    this.rl.close();
    this.emit("submit", this.value);
  }

  // ........
}
```

### 完整实现

```ts
import readline, { Key } from "node:readline";
import ansiEscapes from "ansi-escapes";
import EventEmitter from "node:events";

export interface BaseQuestion {
  name: string;
  message: string;
  initial?: string;
  value?: string | number;
  type: "text";
}

export abstract class Prompt extends EventEmitter {
  value: string = "";

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
```

## 实现文本类型 Prompt

### 处理内容输入与内容删除

更新内部维护的 `value` 变量, 通过 `render` 进行统一更新.

```ts
export class TextPrompt extends Prompt {
  // ........

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

  // ........
}
```

### 实现渲染函数

```ts
export class TextPrompt extends Prompt {
  // ........

  render() {
    this.clear();

    const question = `${chalk.blue("?")} ${this.options.message} ${chalk.gray(">")} ${this.value ? this.value : chalk.gray(this.options.initial || "")}`;

    process.stdout.write(question);

    // 此时保存光标位置, 为 渲染提示文本 做准备
    process.stdout.write(ansiEscapes.cursorSavePosition);

    // 移动至新行行首并清除内容(无论是否有内容)
    process.stdout.write(
      ansiEscapes.cursorDown(1) +
        ansiEscapes.cursorTo(0) +
        ansiEscapes.eraseLine,
    );

    // 此处可自行更新 validator 类型的函数判断
    if (!this.value) {
      // 此时处于问题底部, 当内容填写不合法是, 渲染提示文本.
      process.stdout.write(chalk.red("请输入名字"));
    } else {
      // 若合法, 则清除可能存在的内容
      process.stdout.write(ansiEscapes.eraseLine);
    }

    // 完成 提示文本 更新后, 回到输入内容位置
    process.stdout.write(ansiEscapes.cursorRestorePosition);
  }

  // ........
}
```

### 完整实现

```ts
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
      process.stdout.write(chalk.red("请输入名字"));
    } else {
      process.stdout.write(ansiEscapes.eraseLine);
    }

    process.stdout.write(ansiEscapes.cursorRestorePosition);
  }
}
```

## 使用部分

此处 api 模拟 `prompt` 库.

```ts
import { BaseQuestion } from "./Prompt";
import { TextPrompt } from "./TextPrompt";

const map: Record<string, any> = {
  text: TextPrompt,
};

async function runPrompt(question: BaseQuestion) {
  const promptClass = map[question.type];

  if (!promptClass) {
    return null;
  }

  return new Promise((resolve) => {
    const prompt = new promptClass(question);

    prompt.render();

    prompt.on("submit", (answer: string) => {
      resolve(answer);
    });
  });
}

export async function prompt(questions: BaseQuestion[]) {
  const answers: Record<string, any> = {};

  for (let i = 0; i < questions.length; i++) {
    const name = questions[i].name;

    answers[name] = await runPrompt(questions[i]);
  }

  return answers;
}

const questions: BaseQuestion[] = [
  {
    message: "你的名字?",
    type: "text",
    name: "name",
    initial: "Lumina",
  },
  {
    message: "年龄?",
    type: "text",
    name: "age",
  },
];

(async function () {
  const answers = await prompt(questions);
  console.log(answers);
})();
```
