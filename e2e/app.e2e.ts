import { SetgamePage } from './app.po';

describe('setgame App', function() {
  let page: SetgamePage;

  beforeEach(() => {
    page = new SetgamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('setgame works!');
  });
});
