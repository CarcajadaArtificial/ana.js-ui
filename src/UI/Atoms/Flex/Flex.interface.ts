import classNames from 'classnames';
import { FlexClass } from '../../Particles/Particles';
import {
  AddClassDictionary,
  flexContent,
  flexDirection,
  flexItems,
  flexWrap,
  Spacing,
} from '../../types';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface iFlex {
  direction?: flexDirection;
  wrap?: flexWrap;
  justify?: flexContent;
  items?: flexItems;
  content?: flexContent;
  gap?: Spacing;
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface Flex {
  direction: flexDirection;
  wrap: flexWrap;
  justify: flexContent;
  items: flexItems;
  content: flexContent;
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
