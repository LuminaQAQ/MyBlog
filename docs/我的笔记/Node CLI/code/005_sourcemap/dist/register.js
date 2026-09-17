"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveSourceMapURL = retrieveSourceMapURL;
const node_fs_1 = __importDefault(require("node:fs"));
Error.prepareStackTrace = (err, stack) => {
    const name = err.name || "Error";
    const msg = err.message;
    return `${name}: ${msg}${stack.map((item) => `\n    atat ${wrapCallSite(item)}`)}`;
};
function wrapCallSite(frame) {
    const source = frame.getFileName();
    if (source) {
        const newFrame = {};
        newFrame.getFunctionName = function () {
            return frame.getFunctionName();
        };
        newFrame.getFileName = function () {
            return frame.getFileName();
        };
        newFrame.getLineNumber = function () {
            return 666;
        };
        newFrame.getColumnNumber = function () {
            return frame.getColumnNumber();
        };
        newFrame.toString = function () {
            return (this.getFunctionName() +
                " (" +
                this.getFileName() +
                ":" +
                this.getLineNumber() +
                ":" +
                this.getColumnNumber() +
                ")");
        };
        return newFrame;
    }
    return frame;
}
function retrieveSourceMapURL(source) {
    const fileData = node_fs_1.default.readFileSync(source, { encoding: "utf-8" });
    const regex = /# sourceMappingURL=(.*)$/g;
    let lastMatch, match;
    while ((match = regex.exec(fileData))) {
        lastMatch = match;
    }
    if (!lastMatch)
        return null;
    return lastMatch[1];
}
//# sourceMappingURL=register.js.map