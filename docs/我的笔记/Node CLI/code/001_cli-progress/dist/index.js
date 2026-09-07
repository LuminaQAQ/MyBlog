import ansiEscapes, { cursorShow } from "ansi-escapes";
class ProgressBar {
    constructor(options) {
        this.total = 0;
        this.value = 0;
        this.barCompleteChar = "█";
        this.barIncompleteChar = "░";
        const { hideCursor, barCompleteChar, barIncompleteChar } = options;
        this.barCompleteChar = barCompleteChar;
        this.barIncompleteChar = barIncompleteChar;
        if (hideCursor)
            process.stdout.write(ansiEscapes.cursorHide);
        process.stdout.write(ansiEscapes.cursorSavePosition);
    }
    start(total, value) {
        this.total = total;
        this.value = value;
        this.render();
    }
    update(value) {
        this.value = value;
        this.render();
    }
    stop() {
        process.stdout.write(cursorShow);
    }
    render() {
        let percent = this.value / this.total;
        const barSize = 40;
        if (percent < 0) {
            percent = 0;
        }
        else if (percent >= 1) {
            percent = 1;
        }
        const completeSize = Math.floor(percent * barSize);
        const incompleteSize = barSize - completeSize;
        process.stdout.write(ansiEscapes.cursorRestorePosition);
        process.stdout.write(this.barCompleteChar.repeat(completeSize));
        process.stdout.write(this.barIncompleteChar.repeat(incompleteSize));
        process.stdout.write(`${this.value} / ${this.total}`);
    }
}
const bar = new ProgressBar({
    barCompleteChar: "█",
    barIncompleteChar: "░",
});
let total = 200, value = 0;
bar.start(total, value);
let timer = setInterval(() => {
    value++;
    if (value >= total) {
        clearInterval(timer);
        bar.stop();
    }
    bar.update(value);
}, 20);
