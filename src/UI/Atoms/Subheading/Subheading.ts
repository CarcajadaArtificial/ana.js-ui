/**
 * @module Atoms/Subheading
 */
import { applyDefaultParameters, StaticChild } from 'ana.js';
import {
  Subheading,
  cSubheading,
  dSubheading,
  iSubheading,
} from './Subheading.interface';
import { a } from '../../ana';
import './Subheading.scss';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   ____                                       _
//  |  _ \ __ _ _ __ __ _  __ _ _ __ __ _ _ __ | |__
//  | |_) / _` | '__/ _` |/ _` | '__/ _` | '_ \| '_ \
//  |  __/ (_| | | | (_| | (_| | | | (_| | |_) | | | |
//  |_|   \__,_|_|  \__,_|\__, |_|  \__,_| .__/|_| |_|
//                        |___/          |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////

export const rSubheading =
  (param: iSubheading = {}): Function =>
  (...children: StaticChild[]): HTMLElement => {
    let p: Subheading = applyDefaultParameters<Subheading, iSubheading>(
      dSubheading,
      param
    );
    let c = cSubheading(p);

    return a[p.tag](c.subheading)(...children);
  };
