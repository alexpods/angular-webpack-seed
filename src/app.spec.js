import { AppDirective } from './app';

describe('"app" module', () => {

  describe('AppDirective', () => {
    let directive;

    beforeEach(() => {
      directive = AppDirective();
    });

    it('should work', () => {
      expect(true).toBe(true);
    })
  });
});