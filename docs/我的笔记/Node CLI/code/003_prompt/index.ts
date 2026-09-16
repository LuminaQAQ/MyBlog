import { QuestionObject } from "./Prompt";
import { prompt } from "./utils";

const questions: QuestionObject[] = [
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

(async function () {
  const answers = await prompt(questions);
  console.log(answers);
})();
