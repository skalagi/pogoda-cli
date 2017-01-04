import { SkalagiStationPage } from './app.po';

describe('skalagi-station App', function() {
  let page: SkalagiStationPage;

  beforeEach(() => {
    page = new SkalagiStationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
