import { applyDefaultParameters, StaticChild } from 'ana.js';
import { Surface, cSurface, dSurface, iSurface } from './Surface.interface';
import { a } from '../../ana';
import './Surface.scss';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   ___           __             
//  / __|_  _ _ _ / _|__ _ __ ___ 
//  \__ \ || | '_|  _/ _` / _/ -_)
//  |___/\_,_|_| |_| \__,_\__\___|
//                                
////////////////////////////////////////////////////////////////////////////////////////////////////////

export const rSurface =
  (param: iSurface = {}): Function =>
  (...children: StaticChild[]): HTMLElement => {
    let p: Surface = applyDefaultParameters<Surface, iSurface>(dSurface, param);
    let c = cSurface(p);
    
    return a[p.tag](c)(...children);
  };
