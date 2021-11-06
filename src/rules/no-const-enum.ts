import { createRule } from "../util";

type MessageIds = "noConstEnum";
type Options = [];

const noConstEnum = createRule<Options, MessageIds>({
  name: "no-const-enum",
  meta: {
    type: "problem",
    docs: {
      description: "Disallow TypeScript `const` enums",
      recommended: false,
    },
    messages: {
      noConstEnum:
        "Unexpected `const` enum, use regular enum instead. As a side note, in modern TypeScript, you may not need an enum when an object with `as const` could suffice.",
    },
    schema: [],
  },
  defaultOptions: [],
  create: (context) => ({
    TSEnumDeclaration: (node) => {
      if (node.const === true) {
        context.report({
          node,
          messageId: "noConstEnum",
        });
      }
    },
  }),
});

export default noConstEnum;
