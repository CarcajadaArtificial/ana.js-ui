/**
 * @module Components
 */
import './scss/style.scss'
import { Render } from 'ana.js'
import { rBox } from './Atoms/Box/Box'
import { rDisplay } from './Atoms/Display/Display'
import { rHeading } from './Atoms/Heading/Heading'
import { rLabel } from './Atoms/Label/Label'
import { rParagraph } from './Atoms/Paragraph/Paragraph'
import { rSmall } from './Atoms/Small/Small'
import { rSubheading } from './Atoms/Subheading/Subheading'
import { rTitle } from './Atoms/Title/Title'
import { rLayout } from './Atoms/Layout/Layout'
import { rLink } from './Atoms/Link/Link'
import { rSurface } from './Atoms/Surface/Surface'
import { rFlex } from './Atoms/Flex/Flex'
import { rNavbar } from './Molecules/Navbar/Navbar'
import { rPage } from './Organisms/Page/Page'
import { rApp } from './Organisms/App/App'
// import { rCheckbox } from './Molecules/Checkbox/Checkbox'
// import { rNavbar } from './Molecules/Navbar/Navbar'
// import { rApp } from './Organisms/App/App'


export interface Components extends Render {
  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - 
  //   _____                                   _    _        _  _                
  //  |_   _|  _ _ __  ___  __ _ _ _ __ _ _ __| |_ (_)__    /_\| |_ ___ _ __  ___
  //    | || || | '_ \/ _ \/ _` | '_/ _` | '_ \ ' \| / _|  / _ \  _/ _ \ '  \(_-<
  //    |_| \_, | .__/\___/\__, |_| \__,_| .__/_||_|_\__| /_/ \_\__\___/_|_|_/__/
  //        |__/|_|        |___/         |_|                                     
  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - 
  /**
   * ```Typescript
   * a.Heading({properties})(...children)
   * ```
   * 
   * `Parent`, `Atom`, `Typography`
   * 
   * A Display is large decorative text found rarely on a page. It can be used in any way as long as the 
   * text doesn't feel crowded and is legible.
   */
  Display: Function

  /**
   * ```Typescript
   * a.Heading({properties})(...children)
   * ```
   * 
   * `Parent`, `Atom`, `Typography`
   * 
   * A Heading is the medium-sized version of the three heading types, the other two being the 
   * Subheading and the Title. It is conventionally used for titles of page sections, multiple of these 
   * can be found inside a single page.
   */
  Heading: Function

  /**
   * ```Typescript
   * a.Label({properties})(...children)
   * ```
   * 
   * `Parent`, `Atom`, `Typography`
   * 
   * A Label is one of two base typographical elements, along with a Paragraph. This element is used for 
   * short text, a few words at most. For multilinear text, use a Paragraph instead.
   */
  Label: Function

  /**
   * ```Typescript
   * a.Paragraph({properties})(...children)
   * ```
   * 
   * `Parent`, `Atom`, `Typography`
   * 
   * A Paragraph is one of two base typographical element, along with a Label. This element's use is for 
   * text that has multiple lines and more text after it, maybe a heading or another paragraph. If the 
   * content inside the element is a few words long, use a Label instead.
   */
  Paragraph: Function

  /**
   * ```Typescript
   * a.Small({properties})(...children)
   * ```
   * 
   * `Parent`, `Atom`, `Typography`
   * 
   * The Small is the shortest typographical element, it is used inside small elements that require 
   * text, like Chips or small Buttons.
   */
  Small: Function

  /**
   * ```Typescript
   * a.Subheading({properties})(...children)
   * ```
   * 
   * `Parent`, `Atom`, `Typography`
   * 
   * A Subheading is the smallest of the three heading types, along with a Heading and Title. It is 
   * conventionally used for titles of subsections, multiple of these can be found inside a section.
   */
  Subheading: Function

  /**
   * ```Typescript
   * a.Title({properties})(...children)
   * ```
   * 
   * `Parent`, `Atom`, `Typography`
   * 
   * A Title is the largest heading of the three heading types, the other two being the Heading and 
   * Subheading. It is conventionally used for page title and only one can be found, usually at the top 
   * of the page.
   */
  Title: Function

  /**
   * ```Typescript
   * a.Link({properties})(...children)
   * ```
   * 
   * `Parent`, `Atom`, `Typography`
   * 
   * A Link is an element that will take you to another html page or to perform a lesser command than a 
   * button would do. A Link must clearly explain where the link will take you to, and this information 
   * must be undertandable out of context. Limit the label to two words at most, and these shoulnd't be 
   * generic or vague. Open in a new window only in cases when opening a document with different format 
   * e.g. PDF.
   */
  Link: Function

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - 
  //    ___         _        _                  _  _                
  //   / __|___ _ _| |_ __ _(_)_ _  ___ _ _    /_\| |_ ___ _ __  ___
  //  | (__/ _ \ ' \  _/ _` | | ' \/ -_) '_|  / _ \  _/ _ \ '  \(_-<
  //   \___\___/_||_\__\__,_|_|_||_\___|_|   /_/ \_\__\___/_|_|_/__/
  //                                                                
  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - 
  /**
   * ```Typescript
   * a.Layout({properties})(...children)
   * ```
   * 
   * `Parent`, `Atom`, `Container`
   */
   Layout: Function

  /**
   * ```Typescript
   * a.Surface({properties})(...children)
   * ```
   * 
   * `Parent`, `Atom`, `Container`
   */
  Surface: Function

  /**
   * ```Typescript
   * a.Flex({properties})(...children)
   * ```
   * 
   * `Parent`, `Atom`, `Container`
   */
  Flex: Function

  /**
   * ```Typescript
   * a.Box({properties})(...children)
   * ```
   * 
   * `Parent`, `Atom`, `Container`
   */
   Box: Function

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - 
  //   __  __     _             _        
  //  |  \/  |___| |___ __ _  _| |___ ___
  //  | |\/| / _ \ / -_) _| || | / -_|_-<
  //  |_|  |_\___/_\___\__|\_,_|_\___/__/
  //                                     
  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - 
  /**
   * 
   * ```Typescript
   * a.Navbar({properties})
   * ```
   * 
   * `Empty`, `Molecule`, `App`
   * 
   * The Navbar is in charge of the site’s navigation. Out there, there are numerous different navbars. 
   * They have different scopes and complexities between each other. This one is a navbar stripped down 
   * to it’s bare minimums. It contains the site’s logo and name that work as a “home” button, and an 
   * “actions” space where buttons can be placed to do something. Mainly that space will be occupied by 
   * a Drawer component coming from the right side. It is not a toolbar. The navbar must not reach a 
   * point where it becomes an enabler of main functionalities. Finally, it must be able to be minimized 
   * or entirely hidden.
   * 
   * - **logo** `Node` - @todo
   * - **actions** `Node[]` - @todo
   * - **title** `string` - @todo
   * - **isHidden** `boolean` - @todo
   * - **isMinimized** `boolean` - @todo
   * - **surface** `Surface` - @todo
   */
  Navbar: Function

  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - 
  //    ___                     _             
  //   / _ \ _ _ __ _ __ _ _ _ (_)____ __  ___
  //  | (_) | '_/ _` / _` | ' \| (_-< '  \(_-<
  //   \___/|_| \__, \__,_|_||_|_/__/_|_|_/__/
  //            |___/                         
  //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - 
  /**
   * 
   */
  Page: Function
  /**
   * 
   */
  App: Function
}

export const components = {
  // Typographic Atoms
  Display: rDisplay,
  Heading: rHeading,
  Label: rLabel,
  Paragraph: rParagraph,
  Small: rSmall,
  Subheading: rSubheading,
  Title: rTitle,
  Link: rLink,
  // Container Atoms
  Box: rBox,
  Layout: rLayout,
  Surface: rSurface,
  Flex: rFlex,
  // Molecules
  Navbar: rNavbar,
  // Organisms
  Page: rPage,
  App: rApp,
}