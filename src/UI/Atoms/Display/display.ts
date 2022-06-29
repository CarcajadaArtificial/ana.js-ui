/**
 * @module Atoms/Display
 */
import { applyDefaultParameters, StaticChild } from 'ana.js';
import { Display, cDisplay, dDisplay, iDisplay } from './Display.interface';
import { a } from '../../ana';
import './Display.scss';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   ___  _         _           
//  |   \(_)____ __| |__ _ _  _ 
//  | |) | (_-< '_ \ / _` | || |
//  |___/|_/__/ .__/_\__,_|\_, |
//            |_|          |__/ 
////////////////////////////////////////////////////////////////////////////////////////////////////////

export const rDisplay =
  (param: iDisplay = {}): Function =>
  (...children: StaticChild[]): HTMLElement => {
    let p: Display = applyDefaultParameters<Display, iDisplay>(dDisplay, param);
    let c = cDisplay(p);

    return a[p.tag](c.display)(...children);
  };
