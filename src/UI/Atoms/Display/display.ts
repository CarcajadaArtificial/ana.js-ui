/**
 * @module Display
 */
import { applyDefaultParameters } from 'ana.js';
import { Display, cDisplay, dDisplay, iDisplay } from './Display.interface';
import { a } from '../../ana';
import './Display.scss';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   ____  _           _
//  |  _ \(_)___ _ __ | | __ _ _   _
//  | | | | / __| '_ \| |/ _` | | | |
//  | |_| | \__ \ |_) | | (_| | |_| |
//  |____/|_|___/ .__/|_|\__,_|\__, |
//              |_|            |___/
////////////////////////////////////////////////////////////////////////////////////////////////////////

export const rDisplay =
  (...children: [Node | string | Function]): Function =>
  (param: iDisplay = {}): HTMLElement => {
    let p: Display = applyDefaultParameters<Display, iDisplay>(dDisplay, param);
    let c = cDisplay(p);

    return a.div(c.display)(...children);
  };
