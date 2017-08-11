import { LocalGigsPage } from './app.po';

describe('local-gigs App', () => {
  let page: LocalGigsPage;

  beforeEach(() => {
    page = new LocalGigsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
