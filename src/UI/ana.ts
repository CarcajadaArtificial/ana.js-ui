// This is a temporal solution for global configuration. When ana.config.json is implemented, this should be avoided.

import { Ana, Render } from 'ana.js';

const ana = new Ana();

export const app = ana.createApp;

export const a = app.render<Render>();