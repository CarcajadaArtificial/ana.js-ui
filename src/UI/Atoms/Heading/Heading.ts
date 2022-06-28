/**
 * @module Atoms/Heading
 */
import { applyDefaultParameters, StaticChild } from 'ana.js';
import { Heading, cHeading, dHeading, iHeading } from './Heading.interface';
import { a } from '../../ana';
import './Heading.scss';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   _   _                _ _
//  | | | | ___  __ _  __| (_)_ __   __ _
//  | |_| |/ _ \/ _` |/ _` | | '_ \ / _` |
//  |  _  |  __/ (_| | (_| | | | | | (_| |
//  |_| |_|\___|\__,_|\__,_|_|_| |_|\__, |
//                                  |___/
////////////////////////////////////////////////////////////////////////////////////////////////////////

export const rHeading =
  (param: iHeading = {}): Function =>
  (...children: StaticChild[]): HTMLElement => {
    let p: Heading = applyDefaultParameters<Heading, iHeading>(dHeading, param);
    let c = cHeading(p);

    return a[p.tag](c.heading)(...children);
  };
