import classNames from 'classnames'
import { SpacingClass } from '../../Particles/Particles'
import { AddClassDictionary, Spacing } from '../../types'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface iBox {
  padding?: Spacing
  margin?: Spacing
  border?: Spacing
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface Box {
  padding: Spacing
  // margin: Spacing
  // border: Spacing
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export const dBox: Box = {
  padding: 'sgl',
  // margin: 'sgl',
  // border: 'sgl',
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
// Component Classes
export function cBox(p: Box): AddClassDictionary {
  return {
    box: classNames('a-Box', SpacingClass('p', p.padding))
  }
}