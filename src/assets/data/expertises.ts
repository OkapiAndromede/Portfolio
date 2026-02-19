import htmlLogo from "../logo/html5_logo.svg";
import reactLogo from "../logo/react_logo.svg";
import typeScriptLogo from "../logo/typescript_plain.svg";

export type Expertise = {
  id: "html/css" | "react" | "typescript";
  class: string;
  title: string;
  introduction: string;
  core: string;
  icon: string;
};

export const expertises: Expertise[] = [
  {
    id: "html/css",
    class: "html__header",
    title: "HTML/CSS",
    introduction: "Every great interface starts with solid foundations.",
    core: "I build clean, accessible HTML and CSS layouts that adapt seamlessly across devices, ensuring clarity and consistency in every detail.",
    icon: htmlLogo,
  },
  {
    id: "react",
    class: "react__header",
    title: "React",
    introduction:
      "As interfaces grow more complex, maintaining clarity becomes essential.",
    core: "I use React to build interactive, scalable interfaces that remain easy to maintain as your product evolves.",
    icon: reactLogo,
  },
  {
    id: "typescript",
    class: "typeScript__header",
    title: "TypeScript",
    introduction:
      "As projects scale, confidence in your code becomes critical.",
    core: "I use TypeScript to bring typing and clarity to JavaScript applications, reducing bugs, improving collaboration, and making complex codebases easier to understand and evolve.",
    icon: typeScriptLogo,
  },
];
