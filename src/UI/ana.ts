import { Ana, Render } from 'ana.js';

const ana = new Ana();

export const app = ana.createApp;

export const a = app.render<Render>();