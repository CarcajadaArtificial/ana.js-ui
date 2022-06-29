import { applyDefaultParameters, StaticChild } from 'ana.js';
import { Layout, cLayout, dLayout, iLayout } from './Layout.interface';
import { a } from '../../ana';
import './Layout.scss';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   _                       _
//  | |   __ _ _  _ ___ _  _| |_
//  | |__/ _` | || / _ \ || |  _|
//  |____\__,_|\_, \___/\_,_|\__|
//             |__/
////////////////////////////////////////////////////////////////////////////////////////////////////////

export const rLayout =
  (param: iLayout = {}): Function =>
  (...children: StaticChild[]): HTMLElement => {
    let p: Layout = applyDefaultParameters<Layout, iLayout>(dLayout, param);
    let c = cLayout(p);

    let layoutBlocks: HTMLElement[] = children.map((block) =>
      a.div(c.block)(block)
    );

    return a.div(c.layout)(...layoutBlocks);
  };
