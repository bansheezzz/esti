import { EstiPage } from './app.po';

describe('esti App', () => {
  let page: EstiPage;

  beforeEach(() => {
    page = new EstiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
