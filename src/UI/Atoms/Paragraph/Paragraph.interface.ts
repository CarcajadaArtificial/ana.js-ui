import classNames from 'classnames';
import { ColorContrastClass } from '../../Particles/Particles';
import {
  AddClassDictionary,
  ColorValues,
  ContrastValues,
  TextElements,
} from '../../types';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface iParagraph {
  contrast?: ContrastValues;
  color?: ColorValues;
  tag?: TextElements;
  addClass?: AddClassDictionary;
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface Paragraph {
  contrast: ContrastValues;
  color: ColorValues;
  tag: TextElements;
  addClass: AddClassDictionary;
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export const dParagraph: Paragraph = {
  contrast: 'highest',
  color: 'grey',
  tag: 'span',
  addClass: {},
};

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
// Component Classes
export function cParagraph(p: Paragraph): AddClassDictionary {
  return {
    paragraph: classNames(
      'a-Paragraph',
      ColorContrastClass(p.color, p.contrast, 'txt'),
      p.addClass.paragraph
    ),
  };
}
