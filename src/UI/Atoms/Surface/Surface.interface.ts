import classNames from 'classnames';
import { ColorContrastClass, SpacingClass } from '../../Particles/Particles';
import { AddClassDictionary, ColorValues, ContrastValues, Spacing } from '../../types';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface iSurface {
  background?: ColorValues
  contrast?: ContrastValues
  round?: Spacing
  elevation?: Spacing
  addClass?: AddClassDictionary
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface Surface {
  background: ColorValues
  contrast: ContrastValues
  round: Spacing
  elevation: Spacing
  addClass: AddClassDictionary
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export const dSurface: Surface = {
  contrast: 'highest',
  background: 'grey',
  round: 'sgl',
  elevation: 'sgl',
  addClass: {},
};

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
// Component Classes
export function cSurface(p: Surface): AddClassDictionary {
  return {
    surface: classNames(
      'a-Surface',
      ColorContrastClass(p.background, p.contrast, 'bg'),
      SpacingClass('r', p.round),
      SpacingClass('l', p.elevation),
      p.addClass.surface
    ),
  };
}