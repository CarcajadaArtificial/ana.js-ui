/**
 * @module Atoms/Paragraph
 */
import { applyDefaultParameters, StaticChild } from 'ana.js';
import {
  Paragraph,
  cParagraph,
  dParagraph,
  iParagraph,
} from './Paragraph.interface';
import { a } from '../../ana';
import './Paragraph.scss';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   ____                                       _
//  |  _ \ __ _ _ __ __ _  __ _ _ __ __ _ _ __ | |__
//  | |_) / _` | '__/ _` |/ _` | '__/ _` | '_ \| '_ \
//  |  __/ (_| | | | (_| | (_| | | | (_| | |_) | | | |
//  |_|   \__,_|_|  \__,_|\__, |_|  \__,_| .__/|_| |_|
//                        |___/          |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////

export const rParagraph =
  (param: iParagraph = {}): Function =>
  (...children: StaticChild[]): HTMLElement => {
    let p: Paragraph = applyDefaultParameters<Paragraph, iParagraph>(
      dParagraph,
      param
    );
    let c = cParagraph(p);

    return a[p.tag](c.paragraph)(...children);
  };
