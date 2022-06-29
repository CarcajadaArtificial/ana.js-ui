import { applyDefaultParameters, StaticChild } from 'ana.js';
import { Link, cLink, dLink, iLink } from './Link.interface';
import { a } from '../../ana';
import './Link.scss';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   _    _      _   
//  | |  (_)_ _ | |__
//  | |__| | ' \| / /
//  |____|_|_||_|_\_\
//                   
////////////////////////////////////////////////////////////////////////////////////////////////////////

export const rLink =
  (param: iLink = {}): Function =>
  (...children: StaticChild[]): HTMLElement => {
    let p: Link = applyDefaultParameters<Link, iLink>(dLink, param);
    let c = cLink(p);

    return a.a(c.link)(...children).has({ href: param.href });
  };
