import { StormcastPage } from './app.po';

describe('stormcast App', () => {
  let page: StormcastPage;

  beforeEach(() => {
    page = new StormcastPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('sc works!');
  });
});
