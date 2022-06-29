import classNames from 'classnames';
import { AddClassDictionary } from '../../types';
import { a } from '../../ana';
import { Surface } from '../../Atoms/Surface/Surface.interface';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface iNavbar {
  logo?: Node;
  actions?: Node[];
  title?: string;
  isHidden?: boolean;
  isMinimized?: boolean;
  surface?: Surface;
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface Navbar {
  logo: Node;
  actions: Node[];
  title: string;
  isHidden: boolean;
  isMinimized: boolean;
  surface: Surface;
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export const dNavbar: Navbar = {
  logo: a.span()('⚑'),
  actions: [a.span()('☰')],
  title: 'Title',
  isHidden: false,
  isMinimized: false,
  surface: {
    contrast: 'mid',
    background: 'grey',
    round: 'non',
    elevation: 'non',
    addClass: '',
    tag: 'nav',
  },
};

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
// Component Classes
export function cNavbar(p: Navbar): AddClassDictionary {
  return {
    navbar: classNames('a-Navbar'),
  };
}
