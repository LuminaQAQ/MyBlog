"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prompt = prompt;
const SelectPrompt_1 = require("./SelectPrompt");
const TextPrompt_1 = require("./TextPrompt");
const map = {
    select: SelectPrompt_1.SelectPrompt,
    text: TextPrompt_1.TextPrompt,
};
function runPrompt(question) {
    return __awaiter(this, void 0, void 0, function* () {
        const promptClass = map[question.type];
        if (!promptClass) {
            return null;
        }
        return new Promise((resolve) => {
            const prompt = new promptClass(question);
            prompt.render();
            prompt.on("submit", (answer) => {
                resolve(answer);
            });
        });
    });
}
function prompt(questions) {
    return __awaiter(this, void 0, void 0, function* () {
        const answers = {};
        for (let i = 0; i < questions.length; i++) {
            const name = questions[i].name;
            answers[name] = yield runPrompt(questions[i]);
        }
        return answers;
    });
}
const questions = [
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
    {
        message: "你的班级？",
        type: "select",
        name: "class",
        choices: ["一班", "二班", "三班"],
    },
];
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        const answers = yield prompt(questions);
        console.log(answers);
    });
})();
