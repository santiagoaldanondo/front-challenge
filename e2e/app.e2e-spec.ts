import { FrontChallengePage } from './app.po';

describe('front-challenge App', function() {
  let page: FrontChallengePage;

  beforeEach(() => {
    page = new FrontChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
