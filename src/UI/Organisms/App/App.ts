import { applyDefaultParameters, StaticChild } from 'ana.js';
import { App, cApp, dApp, iApp } from './App.interface';
import { a } from '../../ana';
import './App.scss';
import { rNavbar } from '../../Molecules/Navbar/Navbar';
import { rPage } from '../Page/Page';

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//     _
//    /_\  _ __ _ __
//   / _ \| '_ \ '_ \
//  /_/ \_\ .__/ .__/
//        |_|  |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////

export const rApp = (param: iApp = {}): HTMLElement => {
  let p: App = applyDefaultParameters<App, iApp>(dApp, param);
  let c = cApp(p);

  let urlParams = new URLSearchParams(window.location.search);
  let pageName = urlParams.get('p') === null ? 'index' : urlParams.get('p')!;
  let page;

  if (Object.keys(p.pages).includes(pageName)) {
    page = p.pages[pageName];
  } else {
    page = rPage()('404');
  }

  return a.div(c.app)(rNavbar(), page);
};
