import classNames from 'classnames';
import { ColorContrastClass, SpacingClass } from '../../Particles/Particles';
import { ColorValues, ContrastValues, ParentElements, Spacing } from '../../types';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface iSurface {
  background?: ColorValues
  contrast?: ContrastValues
  round?: Spacing
  elevation?: Spacing
  addClass?: string
  tag?: ParentElements
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface Surface {
  background: ColorValues
  contrast: ContrastValues
  round: Spacing
  elevation: Spacing
  addClass: string
  tag: ParentElements
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export const dSurface: Surface = {
  contrast: 'highest',
  background: 'grey',
  round: 'sgl',
  elevation: 'sgl',
  addClass: '',
  tag: 'div'
};

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
// Component Classes
export function cSurface(p: Surface): string {
  return classNames(
    'a-Surface',
    ColorContrastClass(p.background, p.contrast, 'bg'),
    SpacingClass('r', p.round),
    SpacingClass('l', p.elevation),
    p.addClass
  );
}