import { createRule } from "../util";

type MessageIds = "noEnum";
type Options = [];

const noEnum = createRule<Options, MessageIds>({
  name: "no-enum",
  meta: {
    type: "problem",
    docs: {
      description: "Disallow all types of TypeScript enums",
      recommended: "error",
    },
    messages: {
      noEnum:
        "In modern TypeScript, you may not need an enum when an object with `as const` could suffice.",
    },
    schema: [],
  },
  defaultOptions: [],
  create: (context) => ({
    TSEnumDeclaration: (node) => {
      context.report({
        node,
        messageId: "noEnum",
      });
    },
  }),
});

export default noEnum;
