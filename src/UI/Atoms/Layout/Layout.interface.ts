import classNames from 'classnames';
import { LayoutClass } from '../../Particles/Particles';
import { AddClassDictionary, LayoutMargin, LayoutType } from '../../types';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface iLayout {
  type?: LayoutType
  margin?: LayoutMargin
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface Layout {
  type: LayoutType
  margin: LayoutMargin
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export const dLayout: Layout = { type: 'full', margin: 'full' };

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
// Component Classes
export function cLayout(p: Layout): AddClassDictionary {
  return {
    layout: classNames(LayoutClass(p.type, p.margin)),
    block: 'a-Layout-block',
  };
}