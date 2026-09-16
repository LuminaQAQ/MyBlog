import chalk from "chalk";
import minimist from "minimist";
import prompts from "prompts";

type Framework = {
  name: string;
  display: string;
  color: Function;
  variants: FrameworkVariant[];
};

type FrameworkVariant = {
  name: string;
  display: string;
  color: Function;
  customCommand?: string;
};

const FRAMEWORKS: Framework[] = [
  {
    name: "vue",
    display: "Vue",
    color: chalk.green,
    variants: [
      {
        name: "vue-ts",
        display: "TypeScript",
        color: chalk.blue,
      },
      {
        name: "vue",
        display: "JavaScript",
        color: chalk.yellow,
      },
    ],
  },
  {
    name: "react",
    display: "React",
    color: chalk.cyan,
    variants: [
      {
        name: "react-ts",
        display: "TypeScript",
        color: chalk.blue,
      },
      {
        name: "react-swc-ts",
        display: "TypeScript + SWC",
        color: chalk.blue,
      },
      {
        name: "react",
        display: "JavaScript",
        color: chalk.yellow,
      },
      {
        name: "react-swc",
        display: "JavaScript + SWC",
        color: chalk.yellow,
      },
    ],
  },
];

const TEMPLATES = FRAMEWORKS.map((f) => {
  return f.variants?.map((v) => v.name);
}).reduce((a, b) => {
  return a.concat(b);
}, []);

const argv = minimist<{ template?: string; help?: boolean }>(
  process.argv.slice(2),
  {
    alias: { h: "help", t: "template" },
    string: ["_"],
  },
);

function formatTargetDir(targetDir: string | undefined) {
  return targetDir?.trim().replace(/\/+$/g, "");
}

const defaultTargetDir = "vite-project";

async function init() {
  const argTargetDir = formatTargetDir(argv._[0]);
  const argTemplate = argv.template || argv.t;

  let targetDir = argTargetDir || defaultTargetDir;

  let result: prompts.Answers<"projectName" | "framework" | "variant">;

  try {
    result = await prompts(
      [
        {
          type: argTargetDir ? null : "text",
          name: "projectName",
          message: chalk.reset("Project name:"),
          initial: defaultTargetDir,
          onState: (state) => {
            targetDir = formatTargetDir(state.value) || defaultTargetDir;
          },
        },
        {
          type:
            argTemplate && TEMPLATES.includes(argTemplate) ? null : "select",
          name: "framework",
          message: chalk.reset("Select a framework:"),
          initial: 0,
          choices: FRAMEWORKS.map((framework) => {
            const frameworkColor = framework.color;
            return {
              title: frameworkColor(framework.display || framework.name),
              value: framework,
            };
          }),
        },
        {
          type: (framework: Framework) =>
            framework && framework.variants ? "select" : null,
          name: "variant",
          message: chalk.reset("Select a variant:"),
          choices: (framework: Framework) =>
            framework.variants.map((variant) => {
              const variantColor = variant.color;
              return {
                title: variantColor(variant.display || variant.name),
                value: variant.name,
              };
            }),
        },
      ],
      {
        onCancel: () => {
          throw new Error(chalk.red("✖") + " Operation cancelled");
        },
      },
    );
  } catch (cancelled: any) {
    console.log(cancelled.message);
    return;
  }

  console.log(result);
}

init();
