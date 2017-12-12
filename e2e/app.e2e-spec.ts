import { AdventureManDanPage } from './app.po';

describe('adventure-man-dan App', () => {
  let page: AdventureManDanPage;

  beforeEach(() => {
    page = new AdventureManDanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
