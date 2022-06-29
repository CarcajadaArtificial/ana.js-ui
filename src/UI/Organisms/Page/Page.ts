/**
 * @module Organisms/Page
 */
import { applyDefaultParameters, StaticChild } from 'ana.js';
import { Page, cPage, dPage, iPage } from './Page.interface';
import { a } from '../../ana';
import './Page.scss';
import { rSurface } from '../../Atoms/Surface/Surface';
import { rLayout } from '../../Atoms/Layout/Layout';
import { rFlex } from '../../Atoms/Flex/Flex';
import { rBox } from '../../Atoms/Box/Box';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   ____
//  |  _ \ __ _  __ _  ___
//  | |_) / _` |/ _` |/ _ \
//  |  __/ (_| | (_| |  __/
//  |_|   \__,_|\__, |\___|
//              |___/
////////////////////////////////////////////////////////////////////////////////////////////////////////

export const rPage =
  (param: iPage = {}): Function =>
  (...children: StaticChild[]): HTMLElement => {
    let p: Page = applyDefaultParameters<Page, iPage>(dPage, param);
    let c = cPage(p);

    return rSurface({ addClass: c.page, elevation: 'non', tag: 'main', contrast: 'high' })(
      rSurface({ addClass: c.header, elevation: 'non', contrast: 'mid' })(),
      rLayout(p.layout)(
        rSurface({ addClass: c.content, round: 'dbl' })(
          rBox({padding: 'tpl'})(
            rFlex({direction: 'col'})(
              ...children
            )
          )
        )
      )
    );
  };
