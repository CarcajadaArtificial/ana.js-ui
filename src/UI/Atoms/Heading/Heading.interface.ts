import classNames from 'classnames';
import { ColorContrastClass } from '../../Particles/Particles';
import {
  AddClassDictionary,
  ColorValues,
  ContrastValues,
  TextElements,
} from '../../types';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface iHeading {
  contrast?: ContrastValues;
  color?: ColorValues;
  tag?: TextElements;
  addClass?: AddClassDictionary;
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface Heading {
  contrast: ContrastValues;
  color: ColorValues;
  tag: TextElements;
  addClass: AddClassDictionary;
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export const dHeading: Heading = {
  contrast: 'highest',
  color: 'grey',
  tag: 'span',
  addClass: {},
};

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
// Component Classes
export function cHeading(p: Heading): AddClassDictionary {
  return {
    heading: classNames(
      'a-Heading',
      ColorContrastClass(p.color, p.contrast, 'txt'),
      p.addClass.heading
    ),
  };
}
