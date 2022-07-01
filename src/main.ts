import { app } from './UI/ana';
import { components, Components } from './UI/Components';

app.components = { ...components };
const a = app.render<Components>();

app.init({}, () =>
  a.App({
    pages: {
      index: a.Page()(
        a.Display()('Display'),
        a.Title()('Title'),
        a.Heading()('Heading'),
        a.Subheading()('Subheading'),
        a.Paragraph()('Paragraph'),
        a.Label()('Label'),
        a.Small()('Small'),
        a.Link()('Link')
      ),
    },
  })
);
