/**
 * @module Surface
 */
import { applyDefaultParameters, StaticChild } from 'ana.js';
import { Surface, cSurface, dSurface, iSurface } from './Surface.interface';
import { a } from '../../ana';
import './Surface.scss';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   ____              __
//  / ___| _   _ _ __ / _| __ _  ___ ___
//  \___ \| | | | '__| |_ / _` |/ __/ _ \
//   ___) | |_| | |  |  _| (_| | (_|  __/
//  |____/ \__,_|_|  |_|  \__,_|\___\___|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////

export const rSurface =
  (param: iSurface = {}): Function =>
  (...children: StaticChild[]): HTMLElement => {
    let p: Surface = applyDefaultParameters<Surface, iSurface>(dSurface, param);
    let c = cSurface(p);

    return a.div(c.surface)(...children);
  };
