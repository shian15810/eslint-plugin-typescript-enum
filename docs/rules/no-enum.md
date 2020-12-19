# Disallow the use of TypeScript enums (`no-enum`)

This rule disallows the use of TypeScript enums.

## Rule Details

Examples of **incorrect** code for this rule:

```ts
enum Foo {
  Bar,
  Baz,
}

const enum Foo {
  Bar = "Bar",
  Baz = "Baz",
}

enum Foo {
  Bar = "BAR",
  Baz = "BAZ",
}
```

Examples of **correct** code for this rule:

```ts
const Foo = {
  Bar: 0,
  Baz: 1,
} as const;

type Foo = "Bar" | "Baz";

const Foo = {
  Bar: "BAR",
  Baz: "BAZ",
} as const;
```
