describe('app', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have "Hello, World!" message', () => {
    expect(element(by.tagName('app')).getText()).toEqual('Hello, World!');
  });
});
