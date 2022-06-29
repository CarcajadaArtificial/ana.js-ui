import { applyDefaultParameters, StaticChild } from 'ana.js';
import { Title, cTitle, dTitle, iTitle } from './Title.interface';
import { a } from '../../ana';
import './Title.scss';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   ___                                  _    
//  | _ \__ _ _ _ __ _ __ _ _ _ __ _ _ __| |_  
//  |  _/ _` | '_/ _` / _` | '_/ _` | '_ \ ' \ 
//  |_| \__,_|_| \__,_\__, |_| \__,_| .__/_||_|
//                    |___/         |_|        
////////////////////////////////////////////////////////////////////////////////////////////////////////

export const rTitle =
  (param: iTitle = {}): Function =>
  (...children: StaticChild[]): HTMLElement => {
    let p: Title = applyDefaultParameters<Title, iTitle>(dTitle, param);
    let c = cTitle(p);

    return a[p.tag](c.title)(...children);
  };
