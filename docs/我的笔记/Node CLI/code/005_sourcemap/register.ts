import fs from "node:fs";

Error.prepareStackTrace = (err, stack) => {
  const name = err.name || "Error";
  const msg = err.message;

  return `${name}: ${msg}${stack.map((item) => `\n    atat ${wrapCallSite(item)}`)}`;
};

function wrapCallSite(frame: NodeJS.CallSite) {
  const source = frame.getFileName();

  if (source) {
    const newFrame: Record<string, any> = {};
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
      return (
        this.getFunctionName() +
        " (" +
        this.getFileName() +
        ":" +
        this.getLineNumber() +
        ":" +
        this.getColumnNumber() +
        ")"
      );
    };
    return newFrame;
  }

  return frame;
}

function retrieveSourceMapURL(source: string) {
  const fileData = fs.readFileSync(source, { encoding: "utf-8" });

  const regex = /# sourceMappingURL=(.*)$/g;
  let lastMatch, match;
  while ((match = regex.exec(fileData))) {
    lastMatch = match;
  }
  if (!lastMatch) return null;
  return lastMatch[1];
}

export { retrieveSourceMapURL };
