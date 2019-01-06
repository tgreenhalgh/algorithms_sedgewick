const helpers = require('./quickUnionLazy');

describe('quick union', () => {
  it('runs the tests', () => {
    expect(true).toBe(true);
  });

  describe('quickunion lazy', () => {
    it('should create a new QuickUnionUF', () => {
      const UF = new helpers.QuickUnionUFLazy(5);
      expect(typeof UF).toBe('object');
    });

    it('should have the correct size', () => {
      const UF = new helpers.QuickUnionUFLazy(5);
      expect(UF.QuickUnionUF().length).toBe(5);
    });

    it('should find the correct root', () => {
      const UF = new helpers.QuickUnionUFLazy(5);
      UF.QuickUnionUF();
      expect(UF.root(3)).toBe(3);
    });

    it('should check if two objects are not connected', () => {
      const UF = new helpers.QuickUnionUFLazy(5);
      UF.QuickUnionUF();
      expect(UF.connected(2, 3)).toBe(false);
    });

    it('should connect two objects', () => {
      const UF = new helpers.QuickUnionUFLazy(5);
      UF.QuickUnionUF();
      UF.union(2, 3);
      expect(UF.connected(2, 3)).toBe(true);
    });
  });
});
