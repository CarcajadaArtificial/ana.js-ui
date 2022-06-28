/**
 * @module Atoms/Box
 */
import { applyDefaultParameters, StaticChild } from 'ana.js';
import { Box, cBox, dBox, iBox } from './Box.interface';
import { a } from '../../ana';
import './Box.scss';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   ____
//  | __ )  _____  __
//  |  _ \ / _ \ \/ /
//  | |_) | (_) >  <
//  |____/ \___/_/\_\
//
////////////////////////////////////////////////////////////////////////////////////////////////////////

export const rBox =
  (param: iBox = {}): Function =>
  (...children: StaticChild[]): HTMLElement => {
    let p: Box = applyDefaultParameters<Box, iBox>(dBox, param);
    let c = cBox(p);

    return a.div(c.box)(...children);
  };
