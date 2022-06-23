/**
 * @module Types
 */

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   _____
//  |_   _|   _ _ __   ___  ___
//    | || | | | '_ \ / _ \/ __|
//    | || |_| | |_) |  __/\__ \
//    |_| \__, | .__/ \___||___/
//        |___/|_|
////////////////////////////////////////////////////////////////////////////////////////////////////////

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * - `p` Padding
 * - `m` Margin
 * - `g` Gap
 * - `l` Elevation
 * - `r` Roundness
 */
export type SpacingPrefix = 'p' | 'm' | 'g' | 'l' | 'r';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This type is used for dictionaries that override the css classes of any ui component. The key references the affected part of the component.
 */
export type AddClassDictionary = { [key: string]: string };

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This is the list of HTMLElements that can be used as text elements.
 */
// prettier-ignore
export type TextElements = | 'blockquote' | 'dd' | 'div' | 'dl' | 'dt' | 'figcaption' | 'figure' | 'hr' | 'li' | 'ol' | 'p' | 'pre' | 'ul' | 'a' | 'abbr' | 'b' | 'bdi' | 'cite' | 'code' | 'data' | 'dfn' | 'em' | 'i' | 'kbd' | 'mark' | 'q' | 'rp' | 'rt' | 'ruby' | 's' | 'samp' | 'small' | 'span' | 'strong' | 'sub' | 'sup' | 'time' | 'u' | 'var' | 'wbr'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * When styling a layout, this are the options for the layout margin.
 */
export type LayoutMargin = 'full' | 'single' | 'none';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * When styling anything with color, these are the options that reference that color's contrast.
 */
export type ContrastValues = 'lowest' | 'low' | 'mid' | 'high' | 'highest';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * When styling anything with color, these are the options that reference that color's name.
 */
export type ColorValues =
  | 'red'
  | 'violet'
  | 'blue'
  | 'cyan'
  | 'green'
  | 'lime'
  | 'yellow'
  | 'orange'
  | 'grey';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * When styling a layout, these are the types of layouts possible.
 */
export type LayoutType =
  | 'full'
  | 'center'
  | 'focus'
  | 'halves'
  | 'thirds'
  | 'quarters'
  | 'right'
  | 'left';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * - `non` None
 * - `sgl` Single
 * - `dbl` Double
 * - `tpl` Triple
 */
export type Spacing = 'tpl' | 'dbl' | 'sgl' | 'non';
