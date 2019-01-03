const helpers = require('./quickFindEager');

describe('quick find', () => {
  it('runs the tests', () => {
    expect(true).toBe(true);
  });

  describe('create a new quickfind', () => {
    it('should create a new QuickFindUF', () => {
      const UF = new helpers.QuickFindUF(5);
      expect(typeof UF).toBe('object');
    });
  });
});
