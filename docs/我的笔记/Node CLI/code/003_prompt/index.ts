import { BaseQuestion } from "./Prompt";
import { TextPrompt } from "./TextPrompt";

const map: Record<string, any> = {
  text: TextPrompt,
};

async function runPrompt(question: BaseQuestion) {
  const promptClass = map[question.type];

  if (!promptClass) {
    return null;
  }

  return new Promise((resolve) => {
    const prompt = new promptClass(question);

    prompt.render();

    prompt.on("submit", (answer: string) => {
      resolve(answer);
    });
  });
}

export async function prompt(questions: BaseQuestion[]) {
  const answers: Record<string, any> = {};

  for (let i = 0; i < questions.length; i++) {
    const name = questions[i].name;

    answers[name] = await runPrompt(questions[i]);
  }

  return answers;
}

const questions: BaseQuestion[] = [
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
];

(async function () {
  const answers = await prompt(questions);
  console.log(answers);
})();
