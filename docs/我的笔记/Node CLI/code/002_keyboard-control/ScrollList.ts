import readline from "readline";
import ansiEscapes from "ansi-escapes";
import chalk from "chalk";

interface TerminalSize {
  cols: number;
  rows: number;
}

class ScrollList {
  private _selectedRow: number = 0;

  list: string[] = [];

  constructor(list: string[]) {
    this.list = list;

    process.stdout.write(ansiEscapes.cursorSavePosition);

    this.render();
  }

  /**
   * @returns 返回当前终端视口的 可见行 和 可见列 的数量
   */
  private get _terminalSize(): TerminalSize {
    return {
      cols: process.stdout.columns,
      rows: process.stdout.rows,
    };
  }

  /**
   * 清除视口的所有内容
   */
  clear() {
    const { rows } = this._terminalSize;

    for (let row = rows; row >= 0; row--) {
      process.stdout.write(ansiEscapes.cursorTo(0, row));
      process.stdout.write(ansiEscapes.eraseLine);
    }
  }

  /**
   * 使用 chalk 给选中行上色. `* 2` 用于简单处理中文字符差异
   * @param text 行内容
   * @returns 带背景的行
   */
  bgRow(text: string): string {
    return chalk.bgBlue(
      `${text}${" ".repeat(this._terminalSize.cols - text.length * 2)}`,
    );
  }

  render() {
    this.clear();

    const { rows } = this._terminalSize;

    const visibleList = this.list
      .map((text, i) => (i === this._selectedRow ? this.bgRow(text) : text))
      .slice(
        Math.min(this._selectedRow, this.list.length - rows),
        Math.min(rows + this._selectedRow, this.list.length),
      );

    process.stdout.write(visibleList.join("\n"));
  }

  onKeyInput(name: string) {
    if (name !== "up" && name !== "down") return;

    process.stdout.write(ansiEscapes.cursorHide);

    if (name === "up") {
      this._selectedRow -= 1;
    } else if (name === "down") {
      this._selectedRow += 1;
    }

    this._selectedRow = Math.max(
      0,
      Math.min(this._selectedRow, this.list.length - 1),
    );

    this.render();
  }
}

readline.emitKeypressEvents(process.stdin);

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
    process.stdout.write(ansiEscapes.clearTerminal);
    process.exit();
  }

  list.onKeyInput(key.name);
});
