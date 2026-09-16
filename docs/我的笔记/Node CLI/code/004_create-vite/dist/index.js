var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import chalk from "chalk";
import minimist from "minimist";
import prompts from "prompts";
const FRAMEWORKS = [
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
    var _a;
    return (_a = f.variants) === null || _a === void 0 ? void 0 : _a.map((v) => v.name);
}).reduce((a, b) => {
    return a.concat(b);
}, []);
const argv = minimist(process.argv.slice(2), {
    alias: { h: "help", t: "template" },
    string: ["_"],
});
function formatTargetDir(targetDir) {
    return targetDir === null || targetDir === void 0 ? void 0 : targetDir.trim().replace(/\/+$/g, "");
}
const defaultTargetDir = "vite-project";
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const argTargetDir = formatTargetDir(argv._[0]);
        const argTemplate = argv.template || argv.t;
        let targetDir = argTargetDir || defaultTargetDir;
        let result;
        try {
            result = yield prompts([
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
                    type: argTemplate && TEMPLATES.includes(argTemplate) ? null : "select",
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
                    type: (framework) => framework && framework.variants ? "select" : null,
                    name: "variant",
                    message: chalk.reset("Select a variant:"),
                    choices: (framework) => framework.variants.map((variant) => {
                        const variantColor = variant.color;
                        return {
                            title: variantColor(variant.display || variant.name),
                            value: variant.name,
                        };
                    }),
                },
            ], {
                onCancel: () => {
                    throw new Error(chalk.red("✖") + " Operation cancelled");
                },
            });
        }
        catch (cancelled) {
            console.log(cancelled.message);
            return;
        }
        console.log(result);
    });
}
init();
