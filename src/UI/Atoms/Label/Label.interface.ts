import classNames from 'classnames';
import { ColorContrastClass } from '../../Particles/Particles';
import {
  AddClassDictionary,
  ColorValues,
  ContrastValues,
  TextElements,
} from '../../types';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface iLabel {
  contrast?: ContrastValues;
  color?: ColorValues;
  tag?: TextElements;
  addClass?: AddClassDictionary;
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface Label {
  contrast: ContrastValues;
  color: ColorValues;
  tag: TextElements;
  addClass: AddClassDictionary;
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export const dLabel: Label = {
  contrast: 'highest',
  color: 'grey',
  tag: 'span',
  addClass: {},
};

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
// Component Classes
export function cLabel(p: Label): AddClassDictionary {
  return {
    label: classNames(
      'a-Label',
      ColorContrastClass(p.color, p.contrast, 'txt'),
      p.addClass.label
    ),
  };
}
