import { Ds11Page } from './app.po';

describe('ds11 App', () => {
  let page: Ds11Page;

  beforeEach(() => {
    page = new Ds11Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
