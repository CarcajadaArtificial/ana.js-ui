# Contributing

## Example.ts

```Typescript
/**
 * @module Example
 */
import { applyDefaultParameters, StaticChild } from 'ana.js';
import { Example, cExample, dExample, iExample } from './Example.interface';
import { a } from '../../ana';
import './Example.scss';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
// Example
////////////////////////////////////////////////////////////////////////////////////////////////////////

export const rExample =
  (param: iExample = {}): Function =>
  (...children: StaticChild[]): HTMLElement => {
    let p: Example = applyDefaultParameters<Example, iExample>(dExample, param);
    let c = cExample(p);

    return a.div(c.example)(...children);
  };
```

## Example.interface.ts

```Typescript
import classNames from 'classnames';
import { AddClassDictionary } from '../../types';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface iExample {}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface Example {}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export const dExample: Example = {};

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
// Component Classes
export function cExample(p: Example): AddClassDictionary {
  return {
    example: classNames('a-Example'),
  };
}
```
