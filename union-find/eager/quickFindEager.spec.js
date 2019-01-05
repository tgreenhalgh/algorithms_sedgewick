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

    it('should have the correct size', () => {
      const UF = new helpers.QuickFindUF(5);
      expect(UF.QuickFindUF().length).toBe(5);
    });

    it('should check if two objects are not connected', () => {
      const UF = new helpers.QuickFindUF(5);
      UF.QuickFindUF();
      expect(UF.connected(2, 3)).toBe(false);
    });

    it('should connect two objects', () => {
      const UF = new helpers.QuickFindUF(5);
      UF.QuickFindUF();
      UF.union(2, 3);
      expect(UF.connected(2, 3)).toBe(true);
    });
  });
});
