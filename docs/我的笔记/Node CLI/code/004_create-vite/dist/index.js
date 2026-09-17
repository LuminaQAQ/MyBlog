var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import minimist from "minimist";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
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
        let targetDir = argTargetDir || defaultTargetDir;
        let result;
        // try {
        //   result = await prompts(
        //     [
        //       {
        //         type: argTargetDir ? null : "text",
        //         name: "projectName",
        //         message: chalk.reset("Project name:"),
        //         initial: defaultTargetDir,
        //         onState: (state) => {
        //           targetDir = formatTargetDir(state.value) || defaultTargetDir;
        //         },
        //       },
        //       {
        //         type:
        //           argTemplate && TEMPLATES.includes(argTemplate) ? null : "select",
        //         name: "framework",
        //         message: chalk.reset("Select a framework:"),
        //         initial: 0,
        //         choices: FRAMEWORKS.map((framework) => {
        //           const frameworkColor = framework.color;
        //           return {
        //             title: frameworkColor(framework.display || framework.name),
        //             value: framework,
        //           };
        //         }),
        //       },
        //       {
        //         type: (framework: Framework) =>
        //           framework && framework.variants ? "select" : null,
        //         name: "variant",
        //         message: chalk.reset("Select a variant:"),
        //         choices: (framework: Framework) =>
        //           framework.variants.map((variant) => {
        //             const variantColor = variant.color;
        //             return {
        //               title: variantColor(variant.display || variant.name),
        //               value: variant.name,
        //             };
        //           }),
        //       },
        //     ],
        //     {
        //       onCancel: () => {
        //         throw new Error(chalk.red("✖") + " Operation cancelled");
        //       },
        //     },
        //   );
        // } catch (cancelled: any) {
        //   console.log(cancelled.message);
        //   return;
        // }
        result = {
            projectName: "vite-project",
            framework: {},
            variant: "react-ts",
        };
        const { framework, variant } = result;
        const root = path.resolve(process.cwd(), targetDir);
        const templateDir = path.resolve(fileURLToPath(import.meta.url), "../../template", `template-${variant}`);
        // const write = () => {
        // }
        const renameFiles = {
            _gitignore: ".gitignore",
        };
        const copyDir = (srcDir, destDir) => {
            fs.mkdirSync(destDir, { recursive: true });
            const dir = fs.readdirSync(srcDir);
            dir.forEach((item) => {
                const srcFile = path.resolve(srcDir, item);
                const destFile = path.resolve(destDir, renameFiles[item] ? renameFiles[item] : item);
                copy(srcFile, destFile);
            });
        };
        const copy = (srcDir, destDir) => {
            const stat = fs.statSync(srcDir);
            if (stat.isDirectory()) {
                copyDir(srcDir, destDir);
            }
            else {
                fs.copyFileSync(srcDir, destDir);
            }
        };
        copy(templateDir, root);
    });
}
init();
