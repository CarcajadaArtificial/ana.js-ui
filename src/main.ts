import { GenericData} from 'ana.js'
import { app } from "./UI/ana";
import { components, Components } from './UI/Components';

app.components = { ...components }
const a = app.render<Components>();

app.init({},
  (d: GenericData) => a.Box(a.span()('Test'))()
);
