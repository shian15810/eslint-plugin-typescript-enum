# eslint-plugin-typescript-enum

ESLint rules for TypeScript enums.

## Motivations

From [TypeScript Handbook on Enums](https://www.typescriptlang.org/docs/handbook/enums.html):

> Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.

In other words, TypeScript enums have their corresponsing runtime representations, they are not erased from your emitted JavaScript files after being compiled. This conflicts with one of the [TypeScript Design Non-goals](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Design-Goals#non-goals):

> Provide additional runtime functionality or libraries. Instead, use TypeScript to describe existing libraries.

Having this TypeScript feature extending into your compiled JavaScript also conflicts with the TypeScript slogan of being a **typed superset of JavaScript**, which further introduces vendor lock-in.

[Orta Therox](https://github.com/orta) from Typescript team mentioned in one of his [YouTube video](https://www.youtube.com/watch?v=8qm49TyMUPI&t=1240) that the TypeScript team actually regrets some of the changes it made in the beginning, including introducing enums which basically add features to JavaScript.

Moreover, using enums in TypeScript has a lot of caveats and edge cases to keep in mind. Some aspects of it are even considered **not type safe**!!! Head over to these wonderful articles for more details on these issues:

- https://maxheiber.medium.com/alternatives-to-typescript-enums-50e4c16600b1
- https://stackoverflow.com/questions/40275832/typescript-has-unions-so-are-enums-redundant/60041791#60041791

Additionally, if you have been using [@babel/plugin-transform-typescript](https://babeljs.io/docs/en/babel-plugin-transform-typescript.html), you might already notice that one of the [caveats](https://babeljs.io/docs/en/babel-plugin-transform-typescript.html#caveats) is to avoid using `const enum`s, as those require type information to compile.

Nonetheless, TypeScript is still a very fantastic and powerful programming language that I love very much. Enums may have been a very good feature to have back in the early days (2011) when good alternatives did not yet exist.

However, we now already have alternatives better than enums, such as **const assertions**, **string unions**, **discriminated union**, etc. Which is why I created this ESLint plugin to provide you with some handy configs and rules to disallow the use of TypeScript enums.

This article provides a very in-depth exploration on the alternatives to TypeScript enums:

- https://2ality.com/2020/02/enum-alternatives-typescript.html

## Installation

First, install the peer dependencies:

```sh
npm install --save-dev eslint typescript @typescript-eslint/parser
```

Next, install this package:

```sh
npm install --save-dev eslint-plugin-typescript-enum
```

## Usage

### Recommended Config

Configure this plugin in your ESLint configuration file (`.eslintrc.js`), this will disallow the use of enums altogether:

```js
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["typescript-enum"],
  extends: ["typescript-enum/recommended"],
};
```

### Babel Config (Not Recommended)

If you are using [@babel/plugin-transform-typescript](https://babeljs.io/docs/en/babel-plugin-transform-typescript.html) and want to allow the general use of enums except `const enum`s:

```js
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["typescript-enum"],
  extends: ["typescript-enum/babel"],
};
```

## Rules

**Key**: :heavy_check_mark: = recommended, :wrench: = fixable, :thought_balloon: = requires type information

| Name                                                           | Description                     | :heavy_check_mark: | :wrench: | :thought_balloon: |
| -------------------------------------------------------------- | ------------------------------- | ------------------ | -------- | ----------------- |
| [`typescript-enum/no-const-enum`](docs/rules/no-const-enum.md) | Disallow the use of const enums |                    |          |                   |
| [`typescript-enum/no-enum`](docs/rules/no-enum.md)             | Disallow the use of all enums   | :heavy_check_mark: |          |                   |

## Contributing

Feel free to suggest new configs and rules, PRs are also welcomed!
