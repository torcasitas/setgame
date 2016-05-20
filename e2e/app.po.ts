export class SetgamePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('setgame-app h1')).getText();
  }
}
