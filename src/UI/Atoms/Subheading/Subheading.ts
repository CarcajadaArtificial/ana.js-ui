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
//   ___      _    _                _ _           
//  / __|_  _| |__| |_  ___ __ _ __| (_)_ _  __ _ 
//  \__ \ || | '_ \ ' \/ -_) _` / _` | | ' \/ _` |
//  |___/\_,_|_.__/_||_\___\__,_\__,_|_|_||_\__, |
//                                          |___/ 
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
