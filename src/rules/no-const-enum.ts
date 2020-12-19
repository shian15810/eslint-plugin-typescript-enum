import { createRule } from "../util";

const noConstEnum = createRule({
  name: "no-const-enum",
  meta: {
    type: "problem",
    docs: {
      description: "",
      category: "Best Practices",
      recommended: "error",
    },
    messages: {
      message: "Unexpected const enum.",
    },
    schema: [],
  },
  defaultOptions: [],
  create: (context) => ({
    TSEnumDeclaration: (node) => {
      if (node.const === true) {
        context.report({
          node,
          messageId: "message",
        });
      }
    },
  }),
});

export default noConstEnum;
