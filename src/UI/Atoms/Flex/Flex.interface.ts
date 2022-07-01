import classNames from 'classnames';
import { FlexClass } from '../../Particles/Particles';
import {
  AddClassDictionary,
  FlexContent,
  FlexDirection,
  FlexItems,
  FlexWrap,
  Spacing,
} from '../../types';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface iFlex {
  direction?: FlexDirection;
  wrap?: FlexWrap;
  justify?: FlexContent;
  items?: FlexItems;
  content?: FlexContent;
  gap?: Spacing;
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface Flex {
  direction: FlexDirection;
  wrap: FlexWrap;
  justify: FlexContent;
  items: FlexItems;
  content: FlexContent;
  gap: Spacing;
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export const dFlex: Flex = {
  direction: 'row',
  wrap: 'wrap',
  justify: 'start',
  items: 'start',
  content: 'start',
  gap: 'sgl',
};

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
// Component Classes
export function cFlex(p: Flex): AddClassDictionary {
  return {
    flex: classNames(
      `a-Flex`,
      FlexClass(p.direction, p.wrap, p.justify, p.items, p.content, p.gap)
    ),
  };
}
