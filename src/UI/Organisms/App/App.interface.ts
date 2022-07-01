import classNames from 'classnames';
import { a } from '../../ana';
import { AddClassDictionary, ColorValues, NodeDictionary } from '../../types';
import { AppTypes } from '../../types';
import { rPage } from '../Page/Page';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface iApp {
  title?: string;
  logo?: Node;
  pages?: NodeDictionary;
  color?: ColorValues;
  darkMode?: boolean;
  type?: AppTypes;
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export interface App {
  title: string;
  logo: Node;
  pages: NodeDictionary;
  color: ColorValues;
  darkMode: boolean;
  type: AppTypes;
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
export const dApp: App = {
  title: 'Ana Application',
  logo: a.span()('⚑'),
  pages: {
    index: rPage()(),
  },
  color: 'grey',
  darkMode: false,
  type: 'document',
};

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
// Component Classes
export function cApp(p: App): AddClassDictionary {
  return {
    app: classNames('a-App'),
  };
}
