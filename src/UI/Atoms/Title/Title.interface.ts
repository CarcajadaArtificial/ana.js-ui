import classNames from 'classnames';
import { ColorContrastClass } from '../../Particles/Particles';
import {
  AddClassDictionary,
  ColorValues,
  ContrastValues,
  TextElements,
} from '../../types';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface iTitle {
  contrast?: ContrastValues;
  color?: ColorValues;
  tag?: TextElements;
  addClass?: AddClassDictionary;
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface Title {
  contrast: ContrastValues;
  color: ColorValues;
  tag: TextElements;
  addClass: AddClassDictionary;
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export const dTitle: Title = {
  contrast: 'highest',
  color: 'grey',
  tag: 'span',
  addClass: {},
};

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
// Component Classes
export function cTitle(p: Title): AddClassDictionary {
  return {
    title: classNames(
      'a-Title',
      ColorContrastClass(p.color, p.contrast, 'txt'),
      p.addClass.title
    ),
  };
}
