// interface TextQuestion extends BaseQuestion {
//   type: "text";
// }

// interface NumberQuestion extends BaseQuestion {
//   type: "number";
//   validate?: (value: number) => string | boolean;
// }

// interface ToggleQuestion extends BaseQuestion {
//   type: "toggle";
//   active?: string;
//   inactive?: string;
// }

// interface Choice {
//   title: string;
//   description?: string;
//   value: string | number;
// }

// interface SelectQuestion extends BaseQuestion {
//   type: "select";
//   choices: Choice[];
// }

// interface MultiselectQuestion extends BaseQuestion {
//   type: "multiselect";
//   choices: Choice[];
// }

// interface ConfirmQuestion extends BaseQuestion {
//   type: "confirm";
// }

// type QuestionObject =
//   | TextQuestion
//   | NumberQuestion
//   | ToggleQuestion
//   | SelectQuestion
//   | MultiselectQuestion
//   | ConfirmQuestion;
