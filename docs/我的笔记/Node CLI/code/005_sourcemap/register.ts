import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { MappedPosition, SourceMapConsumer } from "source-map";

Error.prepareStackTrace = (err, stack) => {
  const name = err.name || "Error";
  const msg = err.message;

  return `${name}: ${msg}${stack.map((item) => `\n    atat ${wrapCallSite(item)}`)}`;
};

function wrapCallSite(frame: NodeJS.CallSite) {
  const source = frame.getFileName();

  if (source) {
    const position = mapSourcePosition(
      source,
      frame.getLineNumber()!,
      frame.getColumnNumber()!,
    ) as MappedPosition | null;

    if (!position) return frame;

    const newFrame: Record<string, any> = {};

    newFrame.getFunctionName = function () {
      return frame.getFunctionName();
    };
    newFrame.getFileName = function () {
      return position?.source;
    };
    newFrame.getLineNumber = function () {
      return position?.line;
    };
    newFrame.getColumnNumber = function () {
      return position?.column;
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
  if (!source.startsWith("file://")) return null;

  const fileData = fs.readFileSync(new URL(source), { encoding: "utf-8" });

  const regex = /# sourceMappingURL=(.*)$/g;
  let lastMatch, match;
  while ((match = regex.exec(fileData))) {
    lastMatch = match;
  }
  if (!lastMatch) return null;
  return lastMatch[1];
}

function mapSourcePosition(source: string, line: number, column: number) {
  const sourceMapUrl = retrieveSourceMapURL(source);
  if (!sourceMapUrl) return null;

  const dir = path.dirname(fileURLToPath(source));
  const sourceMapPath = path.join(dir, sourceMapUrl);
  const mapContent = fs.readFileSync(sourceMapPath, "utf-8");
  const map = new SourceMapConsumer(mapContent as any);

  const position = map.originalPositionFor({
    line,
    column,
  });

  return {
    source: path.join(dir, position.source),
    line: position.line,
    column: position.column,
  };
}

export { retrieveSourceMapURL };
