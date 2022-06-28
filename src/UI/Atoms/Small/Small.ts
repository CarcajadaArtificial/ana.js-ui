/**
 * @module Atoms/Small
 */
import { applyDefaultParameters, StaticChild } from 'ana.js';
import { Small, cSmall, dSmall, iSmall } from './Small.interface';
import { a } from '../../ana';
import './Small.scss';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   ____                                       _
//  |  _ \ __ _ _ __ __ _  __ _ _ __ __ _ _ __ | |__
//  | |_) / _` | '__/ _` |/ _` | '__/ _` | '_ \| '_ \
//  |  __/ (_| | | | (_| | (_| | | | (_| | |_) | | | |
//  |_|   \__,_|_|  \__,_|\__, |_|  \__,_| .__/|_| |_|
//                        |___/          |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////

export const rSmall =
  (param: iSmall = {}): Function =>
  (...children: StaticChild[]): HTMLElement => {
    let p: Small = applyDefaultParameters<Small, iSmall>(dSmall, param);
    let c = cSmall(p);

    return a[p.tag](c.small)(...children);
  };
