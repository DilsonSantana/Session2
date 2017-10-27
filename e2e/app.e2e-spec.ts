import { TheServerPage } from './app.po';

describe('the-server App', () => {
  let page: TheServerPage;

  beforeEach(() => {
    page = new TheServerPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
