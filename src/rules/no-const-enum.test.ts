import { RuleTester } from '@typescript-eslint/rule-tester';
import rule from './no-const-enum';

const ruleTester = new RuleTester();

ruleTester.run('no-const-enum', rule, {
  valid: ['const x = 1;', 'const oneEnum = { "ONE": "one" };', 'const enumTwo = { "TWO": "two" };', 'enum a { "KEY" = "VALUE" };'],
  invalid: [
    {
      code: 'const enum a { "KEY" = "VALUE" };',
      errors: [
        {
          messageId: 'noConstEnum',
        },
      ],
    },
  ],
});
