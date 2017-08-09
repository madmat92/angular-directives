import { PDirectivesPage } from './app.po';

describe('p-directives App', () => {
  let page: PDirectivesPage;

  beforeEach(() => {
    page = new PDirectivesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
