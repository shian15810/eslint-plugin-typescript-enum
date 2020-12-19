import { createRule } from "../util";

const noEnum = createRule({
  name: "no-enum",
  meta: {
    type: "problem",
    docs: {
      description: "",
      category: "Best Practices",
      recommended: "error",
    },
    messages: {
      message: "Unexpected enum.",
    },
    schema: [],
  },
  defaultOptions: [],
  create: (context) => ({
    TSEnumDeclaration: (node) => {
      context.report({
        node,
        messageId: "message",
      });
    },
  }),
});

export default noEnum;
