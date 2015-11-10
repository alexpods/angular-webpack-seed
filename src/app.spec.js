import { MyAppDirective } from './app';

describe('"app" module', () => {

  describe('MyAppDirective', () => {
    let directive;

    beforeEach(() => {
      directive = MyAppDirective();
    });

    it('should work', () => {
      expect(true).toBe(true);
    })
  });
});