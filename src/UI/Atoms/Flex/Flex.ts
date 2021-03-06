import { applyDefaultParameters, StaticChild } from 'ana.js';
import { Flex, cFlex, dFlex, iFlex } from './Flex.interface';
import { a } from '../../ana';
import './Flex.scss';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   ___ _         
//  | __| |_____ __
//  | _|| / -_) \ /
//  |_| |_\___/_\_\
//                 
////////////////////////////////////////////////////////////////////////////////////////////////////////

export const rFlex =
  (param: iFlex = {}): Function =>
  (...children: StaticChild[]): HTMLElement => {
    let p: Flex = applyDefaultParameters<Flex, iFlex>(dFlex, param);
    let c = cFlex(p);

    return a.div(c.flex)(...children);
  };
