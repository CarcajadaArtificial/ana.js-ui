/**
 * @module Molecules/Navbar
 */
import { applyDefaultParameters } from 'ana.js';
import { Navbar, cNavbar, dNavbar, iNavbar } from './Navbar.interface';
import { a } from '../../ana';
import './Navbar.scss';
import { rBox } from '../../Atoms/Box/Box';
import { rParagraph } from '../../Atoms/Paragraph/Paragraph';
import { rFlex } from '../../Atoms/Flex/Flex';
import { rLink } from '../../Atoms/Link/Link';
import { rSurface } from '../../Atoms/Surface/Surface';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   _   _             _
//  | \ | | __ ___   _| |__   __ _ _ __
//  |  \| |/ _` \ \ / / '_ \ / _` | '__|
//  | |\  | (_| |\ V /| |_) | (_| | |
//  |_| \_|\__,_| \_/ |_.__/ \__,_|_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////

export const rNavbar = (param: iNavbar = {}): HTMLElement => {
  let p: Navbar = applyDefaultParameters<Navbar, iNavbar>(dNavbar, param);
  let c = cNavbar(p);

  return rSurface({...p.surface, addClass: c.navbar})(
    rBox({ padding: 'tpl' })(
      rFlex({ gap: 'tpl', items: 'center' })(
        rLink()(
          rFlex({ gap: 'tpl', items: 'center' })(p.logo, rParagraph()(p.title))
        ),

        ...p.actions
      )
    )
  )
};
