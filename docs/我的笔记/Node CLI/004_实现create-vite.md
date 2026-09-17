# 004\_实现 create-vite

本章的重点在于`命令行获取`与`模板的获取`, 因此省略 prompt 构造环节.

## 基础准备

```shell
npm install --save minimist prompts chalk
npm i --save-dev @types/minimist
npm i --save-dev @types/prompts
npm install --no-save create-vite
```

## 获取命令行信息

使用 `minimist` 获取命令行参数信息.

> `process.argv`: 包含了 `node 路径 (process.argv[0])`, `运行路径 (process.argv[1])` 和 `用户参数`. 此处仅需使用用户参数.

```ts
const argv = minimist<{ template?: string; help?: boolean }>(
  process.argv.slice(2),
  {
    alias: { h: "help", t: "template" }, // 配置参数选项
    string: ["_"], // argv._ 为存放参数的数组, 但是如果输入数字, 会自动转换成数字类型.
  },
);
```

## 执行模板获取

简单的讲, 就是复制粘贴. 当然, 按照场景的不同, 需要按照自身情况来实现.

这里是通过复制已有的模板文件, 来实现 项目 的建立.

```ts
async function init() {
  const argTargetDir = formatTargetDir(argv._[0]);

  let targetDir = argTargetDir || defaultTargetDir;

  let result: prompts.Answers<"projectName" | "framework" | "variant">;

  // 此处省略 prompt 过程

  result = {
    projectName: "vite-project",
    framework: {},
    variant: "react-ts",
  };

  const { framework, variant } = result;
  const root = path.resolve(process.cwd(), targetDir);
  const templateDir = path.resolve(
    fileURLToPath(import.meta.url),
    "../../template",
    `template-${variant}`,
  );

  const renameFiles: Record<string, any> = {
    _gitignore: ".gitignore",
  };

  const copyDir = (srcDir: string, destDir: string) => {
    fs.mkdirSync(destDir, { recursive: true });
    const dir = fs.readdirSync(srcDir);
    dir.forEach((item) => {
      const srcFile = path.resolve(srcDir, item);
      const destFile = path.resolve(
        destDir,
        renameFiles[item] ? renameFiles[item] : item,
      );
      copy(srcFile, destFile);
    });
  };

  const copy = (srcDir: string, destDir: string) => {
    const stat = fs.statSync(srcDir);

    if (stat.isDirectory()) {
      copyDir(srcDir, destDir);
    } else {
      fs.copyFileSync(srcDir, destDir);
    }
  };

  copy(templateDir, root);
}

init();
```
