import { applyDefaultParameters, StaticChild } from 'ana.js';
import { Screen, cScreen, dScreen, iScreen } from './Screen.interface';
import { a } from '../../ana';
import './Screen.scss';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   ___
//  / __| __ _ _ ___ ___ _ _
//  \__ \/ _| '_/ -_) -_) ' \
//  |___/\__|_| \___\___|_||_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////

export const rScreen =
  (param: iScreen = {}): Function =>
  (...children: StaticChild[]): HTMLElement => {
    let p: Screen = applyDefaultParameters<Screen, iScreen>(dScreen, param);
    let c = cScreen(p);

    return a.div(c)(...children);
  };
