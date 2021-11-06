# Disallow the use of const enums (`no-const-enum`)

This rule disallows the use of TypeScript `const` enums.

## Rule Details

Examples of **incorrect** code for this rule:

```ts
const enum Foo {
  Bar = "Bar",
  Baz = "Baz",
}
```

Examples of **correct** code for this rule:

```ts
type Foo = "Bar" | "Baz";
```
