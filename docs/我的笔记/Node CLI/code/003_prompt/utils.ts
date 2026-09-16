import { BaseQuestion, QuestionObject } from "./Prompt";
import { SelectPrompt } from "./SelectPrompt";
import { TextPrompt } from "./TextPrompt";

const map: Record<string, any> = {
  select: SelectPrompt,
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
