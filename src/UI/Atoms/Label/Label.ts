/**
 * @module Atoms/Label
 */
import { applyDefaultParameters, StaticChild } from 'ana.js';
import { Label, cLabel, dLabel, iLabel } from './Label.interface';
import { a } from '../../ana';
import './Label.scss';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   _          _          _
//  | |    __ _| |__   ___| |
//  | |   / _` | '_ \ / _ \ |
//  | |__| (_| | |_) |  __/ |
//  |_____\__,_|_.__/ \___|_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////

export const rLabel =
  (param: iLabel = {}): Function =>
  (...children: StaticChild[]): HTMLElement => {
    let p: Label = applyDefaultParameters<Label, iLabel>(dLabel, param);
    let c = cLabel(p);

    return a[p.tag](c.label)(...children);
  };
