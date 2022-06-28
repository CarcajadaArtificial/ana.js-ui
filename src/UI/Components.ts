/**
 * @module Components
 */
import './scss/style.scss'
import { Render } from 'ana.js'
import { rBox } from './Atoms/Box/Box'
import { rDisplay } from './Atoms/Display/display'
import { rHeading } from './Atoms/Heading/Heading'
import { rLabel } from './Atoms/Label/Label'
import { rParagraph } from './Atoms/Paragraph/Paragraph'
import { rSmall } from './Atoms/Small/Small'
import { rSubheading } from './Atoms/Subheading/Subheading'
import { rTitle } from './Atoms/Title/Title'
import { rLayout } from './Atoms/Layout/Layout'
import { rLink } from './Atoms/Link/Link'
import { rSurface } from './Atoms/Surface/Surface'
// import { rList } from './Atoms/List/List'
// import { rCheckbox } from './Molecules/Checkbox/Checkbox'
// import { rNavbar } from './Molecules/Navbar/Navbar'
// import { rApp } from './Organisms/App/App'
// import { rPage } from './Organisms/Page/Page'

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//    ____                                             _       
//   / ___|___  _ __ ___  _ __   ___  _ __   ___ _ __ | |_ ___ 
//  | |   / _ \| '_ ` _ \| '_ \ / _ \| '_ \ / _ \ '_ \| __/ __|
//  | |__| (_) | | | | | | |_) | (_) | | | |  __/ | | | |_\__ \
//   \____\___/|_| |_| |_| .__/ \___/|_| |_|\___|_| |_|\__|___/
//                       |_|                                   
////////////////////////////////////////////////////////////////////////////////////////////////////////

export interface Components extends Render {
  Box: Function
  Display: Function
  Heading: Function
  Label: Function
  Paragraph: Function
  Small: Function
  Subheading: Function
  Title: Function
  Layout: Function
  Link: Function
  Surface: Function
}

export const components = {
  Box: rBox,
  Display: rDisplay,
  Heading: rHeading,
  Label: rLabel,
  Paragraph: rParagraph,
  Small: rSmall,
  Subheading: rSubheading,
  Title: rTitle,
  Layout: rLayout,
  Link: rLink,
  Surface: rSurface,
}