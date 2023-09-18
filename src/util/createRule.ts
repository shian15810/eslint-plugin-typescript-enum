import { ESLintUtils } from "@typescript-eslint/utils";

const { version } = require("../../package.json");

const createRule = ESLintUtils.RuleCreator(
  (name) =>
    `https://github.com/shian15810/eslint-plugin-typescript-enum/blob/v${version}/docs/rules/${name}.md`
);

export { createRule };
