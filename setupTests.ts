/*
As recommended in the vitest docs: https://typescript-eslint.io/packages/rule-tester#vitest

ESLint's RuleTester relies on some global hooks for tests. If they aren't available globally, your tests will fail with an error like: 

```
Error: Missing definition for `afterAll` - you must set one using `RuleTester.afterAll` or there must be one defined globally as `afterAll`.`
```
*/

import * as vitest from 'vitest';
import { RuleTester } from '@typescript-eslint/rule-tester';

RuleTester.afterAll = vitest.afterAll;
RuleTester.it = vitest.it;
RuleTester.itOnly = vitest.it.only;
RuleTester.describe = vitest.describe;
