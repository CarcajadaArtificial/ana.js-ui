import classNames from 'classnames';
import { ColorContrastClass } from '../../Particles/Particles';
import {
  AddClassDictionary,
  ColorValues,
  ContrastValues,
  TextElements,
} from '../../types';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface iDisplay {
  contrast?: ContrastValues;
  color?: ColorValues;
  tag?: TextElements;
  addClass?: AddClassDictionary;
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface Display {
  contrast: ContrastValues;
  color: ColorValues;
  tag: TextElements;
  addClass: AddClassDictionary;
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export const dDisplay: Display = {
  contrast: 'highest',
  color: 'grey',
  tag: 'span',
  addClass: {},
};

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
// Component Classes
export function cDisplay(p: Display): AddClassDictionary {
  return {
    display: classNames(
      'a-Display',
      ColorContrastClass(p.color, p.contrast, 'txt'),
      p.addClass.display
    ),
  };
}
